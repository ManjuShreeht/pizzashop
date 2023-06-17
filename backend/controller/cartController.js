const { default: mongoose } = require("mongoose");
const Cart = require("../models/cartModel");

const addcart = async (req, res) => {
  try {
    const { name, image, varient, quantity, prices,price } = req.body;
    const newcart = new Cart({
      ...req.body,
    });
    await newcart.save();
    return res.status(200).send(newcart);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
const getcart = async (req, res) => {
  const { userId } = req.body;
  try {
    const cart = await Cart.find({ userId: userId });
    res.send(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const deletecart = async (req, res) => {
  const { cartId } = req.body;
  try {
    const cart = await Cart.findById({ _id: cartId });

    const del = await Cart.findByIdAndDelete({ _id: cartId });

    res.status(200).send("deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const deleteusercart = async (req, res) => {
  const { userId } = req.body;
  console.log(mongoose.Types.ObjectId.isValid(userId));
  try {
    const del = await Cart.deleteMany({ userId: userId });

    res.status(200).send("deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const updatecart = async (req, res) => {
  const { cartId } = req.body;
  try {
    const updatedUser = await Cart.findByIdAndUpdate(
      { _id: cartId },

      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send("updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = { addcart, getcart, deletecart, updatecart, deleteusercart };
