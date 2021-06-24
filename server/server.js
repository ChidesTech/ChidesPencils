const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const drawingRoute = require("./routes/drawingRoutes");
const uploadRoute = require("./routes/uploadRoutes");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true }));

const MongoDBUri = "mongodb+srv://chidestech:iluvumum@chidespencils.glmmq.mongodb.net/chidespencils?retryWrites=true&w=majority"

mongoose.connect( MongoDBUri ||  "mongodb://localhost/photoGallery"  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(result => {
      console.log("MongoDB is connected")
   }).catch(err => console.log(err))
  
//ROUTES SETUP
app.use("/api/users", userRoute);
app.use("/api/drawings", drawingRoute);
app.use('/api/uploads', uploadRoute);

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});




app.get("/", (req, res)=>{
    res.send("Server Is Ready")
})




app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
})
app.listen(process.env.PORT || 5000, ()=> console.log("Listening on port 5000 at http://localhost:5000"));