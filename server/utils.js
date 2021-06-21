const jwt = require("jsonwebtoken");


exports.getToken = (user)=>{
return jwt.sign({
    _id: user._id,
    admin: user.admin,

},"yes", {expiresIn:"1000d"}
    )};




exports.isAuth = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      const onlyToken = token.slice(7, token.length);
      jwt.verify(onlyToken, "yes", (err, decode) => {
        if (err) {
          return res.status(401).send({ msg: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ msg: 'Token is not supplied.' });
    }
  };
