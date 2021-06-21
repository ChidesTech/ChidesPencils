const express = require("express");
const User = require("../models/userModel");
const {getToken, isAuth}  = require("../utils");

const userRoute = express.Router();

userRoute.put('/:id',isAuth, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.admin = req.body.admin || user.admin;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      admin: updatedUser.admin,
      token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});

userRoute.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      admin: 'Desmond',
      password: 'des',
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});
userRoute.get("/seed",async(req, res)=>{
  await User.deleteMany({});
  const createdUsers = await User.insertMany([
    {admin: "Desmond",password: "des"},
    {admin: "reset1",password: "reset1"},
    {admin: "reset2",password: "reset2"},
    {admin: "reset3",password: "reset3"},
    {admin: "reset4",password: "reset4"},
    {admin: "reset5",password: "reset5"},
    {admin: "reset6",password: "reset6"},
    {admin: "reset7",password: "reset7"},
    {admin: "reset8",password: "reset8"},
    {admin: "reset9",password: "reset9"},
    {admin: "reset10",password: "reset10"},
    
]);
  res.send({createdUsers})
});


  userRoute.post('/login', async (req, res) => {
    const loginUser = await User.findOne({
      admin: req.body.admin,
      password: req.body.password,
    });
    
    if (loginUser) {
      res.send({
        _id: loginUser.id,
        admin: loginUser.admin,
        token:getToken(loginUser),
      });
    } else {
      res.status(401).send({ msg: 'Invalid Email or Password.' });
    }
  });
  


module.exports = userRoute;