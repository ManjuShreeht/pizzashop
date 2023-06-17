const { v4: uuidv4 } = require("uuid");

const Order = require("../models/orderModel");
const { trusted } = require("mongoose");
const stripe = require("stripe")(
  "sk_test_51LwgK4SHPx1utwaq54NXusKPUi01UD0GQhTueDdOpRALwCd9IxMHz8kqW7k6BDrwH7odxpdULeLPq4q67r8GFfyT00JKZXdEK3"
);

const placeorder = async (req, res) => {
  const { token, subtotal, currentUser, cart } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    console.log(payment.id);
    if (payment) {
      const newOrder = new Order({
        name: currentUser.username,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cart,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          picode: token.card.address_zip,
        },
        transectionId: payment.id,
      });
      newOrder.save();

      //
      // console.log(newOrder);
      res.send("Payment Success");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: error.stack,
    });
  }
};
const getOrder = async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid: userid }).sort({ _id: -1 });

    return res.send(orders);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "something went wrong" });
  }
};

const getAllOrder = async (req, res) => {
  
  try {
    const orders = await Order.find({});

    return res.send(orders);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "something went wrong" });
  }
};

const DeliverOrder = async (req, res) => {
  const orderid=req.body.id
  try {
    const orders = await Order.findOne({_id:orderid})
    orders.isDeliverd=true
    await orders.save()
    return res.send("order delived success");
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "something went wrong" });
  }
};

const deleteorder = async (req, res) => {
  const { orderId } = req.body;
  try {
    const order = await Order.findById({ _id: orderId });

    const del = await Order.findByIdAndDelete({ _id: orderId });

    res.status(200).send("deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = { placeorder, getOrder, getAllOrder,DeliverOrder,deleteorder };
