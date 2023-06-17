const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var pizzaSchema = new mongoose.Schema({
    name:{
        type:String,
        require
       
    },
    varients:[],
    prices:[],
    category:{type:String,require},
    image:{type:String,require},
    description:{type:String,require}
   
},{timestamps:true,});

//Export the model
const pizzaModel = mongoose.model('Pizzas', pizzaSchema);
module.exports=pizzaModel