const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error("Already such an account. Try a different email");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "User registration successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("Invalid credentials");
    }

    const { password, ...others } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUserdata = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ success: true, data: user, message: "user data" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `getuser ${error.meassage}` });
  }
};

const deleteUser = async (req, res) => {
  const userId=req.body.userId;
  try {
    const user = await User.findById({_id:userId});
    const del= await User.findByIdAndDelete({_id:userId})
    res.status(200).json({  message: "user data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `getuser ${error.meassage}` });
  }
};
module.exports = { register, login, getUserdata, getAllUser,deleteUser };
