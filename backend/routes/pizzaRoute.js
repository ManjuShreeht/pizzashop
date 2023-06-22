const express = require("express");

const { verifyTokenAndAdmin } = require("../middleware/authMiddleware");
const {
  addPizza,
  getAll,
  editPizza,
  deletepizza,
  getPizzaId,
} = require("../controller/pizzaController");

const router = express.Router();

router.get("/getall", getAll);
router.post("/addpizza", addPizza);
router.put("/edit/:id", editPizza);
// router.post("/editpizza", EditPizza);
router.delete("/delete/:id", deletepizza);
router.get("/getbyid/:id", getPizzaId);

module.exports = router;
