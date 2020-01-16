const jwt = require("jsonwebtoken");
const tokenInfo = require("../configs/index")

module.exports = function(req, res, next){
  let token;
  if(req.headers['x-access-token']) {
    token = req.headers['x-access-token'];
  }
  if(req.headers['authorization']) {
    token = req.headers['authorization'];
  }
  if(req.headers['token']) {
    token = req.headers['token'];
  }
  if(req.query['token']) {
    token = req.query['token'];
  }
  if(token){
    jwt.verify(token, tokenInfo.secret, function(err, done){
      console.log('hello from token room :>>', token);
      if(err){
        return next({err});
      }
      console.log('Token decoded > ', done);
      return next();
    })
  } else {
    next({
      msg: 'Token is not provided'
    })
  }
}