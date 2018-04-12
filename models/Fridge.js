const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fridge = new Schema({
     itemName: String, required: false,
     img : String , required:false
    
});

module.exports = mongoose.model("Fridge", Fridge);