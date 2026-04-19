import UserModel from "../models/user.model.js"

const createUser = async function (req, res) {
  try {
    const userObject = req.body;

    const user = await UserModel.create(userObject);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getAlluser = async function (req, res) {
  try {
    const user = await UserModel.find();
    if (user.length != 0) {
      res.status(201).json({
        message: user,
      });
    } else {
      res.status(404).json({
        message: "did not find any user",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getUserById = async function (req, res) {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    if (user) {
      user.password = undefined;
      user.__v = undefined;

      if (user.confirmPassword) {
        user.confirmPassword = undefined;
      }

      res.status(200).json({
        data: user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Internal server error",
      message: err.message,
    });
  }
};

const deleteUser = async function (req, res) {
  try {
    let { id } = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);
    if (user == null) {
      res.status(404).json({
        status: "success",
        message: "user doesn't exist",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "user is deleted",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "internal server error",
      message: err.message,
    });
  }
};

export { createUser, getAlluser, getUserById, deleteUser };
