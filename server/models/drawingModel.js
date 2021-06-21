const mongoose = require("mongoose");


const drawingSchema = new mongoose.Schema({
    name:{type: String, required: false},
    image:{type: String, required: true},
    
    
},{timestamps: true}
);
 
const Drawing  = mongoose.model("Drawing", drawingSchema);

 module.exports = Drawing; 

