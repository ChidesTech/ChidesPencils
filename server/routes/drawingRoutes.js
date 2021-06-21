const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const data = require("../data");
const Drawing = require("../models/drawingModel");
const {isAuth} = require("../utils.js")

const drawingRoute = express.Router();

drawingRoute.get("/",expressAsyncHandler(async(req, res)=>{
    const drawings = await Drawing.find({});
    res.send( drawings )
}))


drawingRoute.post("/",isAuth, async(req, res)=>{
    const {name, image} = req.body;
    if(image){
    const drawing = new Drawing({
        name,
        image
    });
    const newDrawing = await drawing.save()
    if(newDrawing){
      return  res.status(201).send({msg: "New drawing has been successfully created", data: newDrawing})
    }
    return res.status(500).send({msg:"Error in creating new drawing"})}
})
drawingRoute.put("/:id",isAuth, async(req, res)=>{
    const drawingId = req.params.id;
    const drawing = await Drawing.findById( drawingId);
    if(drawing){
        drawing.name = req.body.name;
        drawing.image= req.body.image;
        const updatedDrawing = await drawing.save()
       if(updatedDrawing){
      return  res.status(200).send({msg: "Drawing has been successfully created", data: updatedDrawing})
    }
    }
     return res.status(500).send({msg:"Error in updating drawing"})
})

drawingRoute.delete("/:id",isAuth, async(req, res)=>{
    const deletedDrawing = await Drawing.findById(req.params.id);
    if(deletedDrawing){
        await deletedDrawing.remove();
        res.send({msg: "Drawing Deleted"})
    }else{
    res.send("Error in deleting drawing")
    }
})


drawingRoute.get("/seed",expressAsyncHandler(async(req, res)=>{
    await Drawing.deleteMany({})
    const createdDrawings = await Drawing.insertMany(data.drawings);
    res.send({createdDrawings})
})) 





// drawingRoute.get("/:id",expressAsyncHandler(async(req, res)=>{
//     const drawing = await Drawing.findById(req.params.id);
//     if(drawing){
//         res.send(drawing)

//     }else{
//         res.status(404).send({message: "drawing wasn't found"})
//     }
// }))




module.exports = drawingRoute;