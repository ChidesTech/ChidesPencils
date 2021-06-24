const express =require('express');
const multer =require('multer');
// const multerS3 =require('multer-s3');
// const aws =require('aws-sdk');
// const config =require('../config');
const {cloudinary} = require("../utils/cloudinary.js")




const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

const uploadRoute = express.Router();

uploadRoute.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

uploadRoute.post('/cloud', async(req, res) => {
  try {
    const fileStr = req.body.data;
   
      const uploadedResponse = await cloudinary.uploader.
      upload(fileStr, {
        upload_preset : "chidespencils"
      });
      res.send(uploadedResponse.url)
    
   
  } catch (error) {
    console.log(error);
    res.status(500).json({err: "Something went wrong"});
  }
});







// aws.config.update({
//   accessKeyId: config.accessKeyId,
//   secretAccessKey: config.secretAccessKey,
// });
// const s3 = new aws.S3();
// const storageS3 = multerS3({
//   s3,
//   bucket: 'amazona-bucket',
//   acl: 'public-read',
//   contentType: multerS3.AUTO_CONTENT_TYPE,
//   key(req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const uploadS3 = multer({ storage: storageS3 });
// uploadRoute.post('/s3', uploadS3.single('image'), (req, res) => {
//   res.send(req.file.location);
// });


module.exports = uploadRoute;


