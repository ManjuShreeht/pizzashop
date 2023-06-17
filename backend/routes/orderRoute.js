const express = require("express");
const {
  placeorder,
  getOrder,
  getAllOrder,
  DeliverOrder,
  deleteorder,
} = require("../controller/orderController");

const router = express.Router();

router.post("/placeorder", placeorder);

router.post("/getuserorders", getOrder);

router.get("/getallorders", getAllOrder);
router.post("/updateorders", DeliverOrder);
router.post("/deleteorder", deleteorder);

module.exports = router;
