import jwt from "jsonwebtoken";
import util from "util";
import UserModel from "../models/user.model.js";
import emailSender from "../utils/dynamicEmailSender.js";

const promisify = util.promisify;
const promisedJWTsign = promisify(jwt.sign);
const promisedJWTverify = promisify(jwt.verify);

// ================= SIGNUP =================
async function signupHandler(req, res) {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.status(400).json({
        status: "failure",
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "failure",
        message: "Passwords do not match",
      });
    }

    const existingUser = await UserModel.findOne({ email: email.trim() });

    if (existingUser) {
      return res.status(400).json({
        status: "failure",
        message: "User already exists",
      });
    }

    const newUser = await UserModel.create({
      ...req.body,
      email: email.trim(),
    });

    return res.status(201).json({
      status: "success",
      message: "Signup successful",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });

  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
}

// ================= LOGIN =================
async function loginHandler(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
      email: email.trim(),
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "Invalid email or password",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        status: "failure",
        message: "Invalid email or password",
      });
    }

    const token = await promisedJWTsign(
      { id: user._id },
      process.env.JWT_SECRET_KEY
    );

    res.cookie("jwt", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      status: "success",
      message: "Login successful",
    });

  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
}

// ================= FORGOT PASSWORD =================
async function forgotPasswordController(req, res) {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email: email.trim() });

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
      });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;

    await user.save({ validateBeforeSave: false });

    await emailSender("./src/templates/otp.html", user.email, {
      name: user.name,
      otp,
    });

    return res.status(200).json({
      status: "success",
      message: "OTP sent successfully",
      resetURL: `http://localhost:4000/api/auth/resetPassword/${user._id}`,
    });

  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
}

// ================= RESET PASSWORD =================
async function resetPasswordHandler(req, res) {
  try {
    const { password, confirmPassword, otp } = req.body;

    if (!password || !confirmPassword || !otp) {
      return res.status(400).json({
        status: "failure",
        message: "All fields required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "failure",
        message: "Passwords do not match",
      });
    }

    const user = await UserModel.findById(req.params.id).select("+password");

    if (!user) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
      });
    }

    if (!user.otp || Date.now() > user.otpExpiry) {
      return res.status(401).json({
        status: "failure",
        message: "OTP expired or invalid",
      });
    }

    if (user.otp !== String(otp)) {
      return res.status(401).json({
        status: "failure",
        message: "Invalid OTP",
      });
    }

    // ✅ IMPORTANT: NO HASHING HERE
    user.password = password;

    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: "success",
      message: "Password reset successful",
    });

  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
}

// ================= PROTECT =================
const protectRouteMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        status: "failure",
        message: "Unauthorized",
      });
    }

    const decoded = await promisedJWTverify(
      token,
      process.env.JWT_SECRET_KEY
    );

    req.userId = decoded.id;
    next();

  } catch {
    return res.status(401).json({
      status: "failure",
      message: "Invalid token",
    });
  }
};

// ================= LOGOUT =================
const logoutController = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return res.status(200).json({
    status: "success",
    message: "Logged out",
  });
};

export {
  signupHandler,
  loginHandler,
  forgotPasswordController,
  resetPasswordHandler,
  protectRouteMiddleware,
  logoutController,
};