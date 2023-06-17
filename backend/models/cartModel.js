const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    pizzaId: { type: mongoose.Types.ObjectId, ref: "Pizzas" },
    name: { type: String, requied: true },
    image: { type: String, required: true },
    varient: { type: String, required: true },
    quantity: { type: Number, required: true },
    prices: [],
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
