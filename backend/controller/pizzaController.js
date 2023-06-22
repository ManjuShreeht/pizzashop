const Pizza = require("../models/pizzaModel.js");

const addPizza = async (req, res) => {
  const { name, category, description, image, prices } = req.body;
  try {
    const newPizza = new Pizza({
      name: name,
      image: image,
      varients: ["small", "medium", "large"],
      description: description,
      category: category,
      prices: prices,
    });
    await newPizza.save();
    return res.status(200).send("New Pizza Added ");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const pizza = await Pizza.find({}).sort({ _id: -1 });
    return res.status(200).send(pizza);
  } catch (error) {
    console.log(error);
  }
};

const editPizza = async (req, res) => {
  const { name, category, description, image, prices } = req.body;
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!image) {
      req.body.image = pizza.image;
    }
    if (!category) {
      req.body.category = pizza.category;
    }
    if (!name) {
      req.body.name = pizza.name;
    }
    if (!description) {
      req.body.desciption = pizza.description;
    }
    
   
    const updatedpizza = await Pizza.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    return res.status(200).send(updatedpizza);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const deletepizza = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    const deletedpizza = await Pizza.findByIdAndDelete(req.params.id);
    return res.status(200).send("deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const getPizzaId = async (req, res) => {
  const id = req.params.id;
  try {
    const pizza = await Pizza.find({ _id: id });
    res.send(pizza);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
module.exports = { addPizza, getAll, editPizza, deletepizza, getPizzaId };
