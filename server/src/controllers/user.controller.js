import UserModel from "../models/user.model.js"

/*
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
*/

const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const { _id, name, email, createdAt, wishlist, isPremium } = await UserModel.findById(userId);
        res.status(200).json({
            user: {
                _id: _id,
                name: name,
                email: email,
                createdAt: createdAt,
                wishlist: wishlist,
                isPremium: isPremium,
            },
            status: "success",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getUserWishlist = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await UserModel.findById(userId);
        res.status(200).json({
            data: user.wishlist,
            status: "success",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const addToWishlist = async (req, res) => {
  
    try {
        const userId = req.userId;
        console.log("req.body:", req.body);
        console.log("userId:", req.userId);
        // const { id, poster_path, name, media_type } = req.body;
        const { id, poster_path, name, mediaType } = req.body;
        console.log('posterpath', poster_path)
        const user = await UserModel.findById(userId);
        
        if (!user) {
            return res.status(404).send("User not found");
        }
        const wishlist = user.wishlist || [];
        if (wishlist.find(item => String(item.id) === String(id))) {
            return res.status(400).json({
                message: "Item already in wishlist",
                status: "failure",
            });
        }

        const wishlistItem = {
            poster_path,
            name,
            id,
            mediaType,
        };

        // user.wishlist.push(wishlistItem);
        const result = await UserModel.findOneAndUpdate(
            { _id: userId },
            { $push: { wishlist: wishlistItem } },
            { new: true, upsert: true } // options to return the updated document and create if it doesn't exist
        );
          console.log("updated user wishlist:", result.wishlist);
        res.status(200).json({
            status: "success",
        });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({
            message: error.message,
            status: "failure",
        });
    }
};

// export { createUser, getAlluser, getUserById, deleteUser };
export { getCurrentUser, getUserWishlist, addToWishlist };
