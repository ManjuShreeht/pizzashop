const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
      required: true,
    },
    isDeliverd: {
      type: Boolean,
      default: false,
      // required:true,
    },
    transectionId: {
      type: String,
      // required:true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
