const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    admin:{type: String},
    password:{type: String, required: true}
}
);
 
const UserModel  = mongoose.model("User", userSchema);

 module.exports = UserModel

