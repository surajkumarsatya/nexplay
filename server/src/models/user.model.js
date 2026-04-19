import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [10, "password should be atleast 10 length"],
    select: false,
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function (el) {
        if (el === undefined) return true;
        return el === this.password;
      },
      message: "passwords should match",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "admin", "feed curator", "moderator"],
    default: "user",
  },
  otp: String,
  otpExpiry: Date,
});

// ✅ HASH PASSWORD (ONLY HERE)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
});

// ✅ COMPARE PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;