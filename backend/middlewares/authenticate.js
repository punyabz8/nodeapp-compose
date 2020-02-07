const jwt = require("jsonwebtoken");
const tokenInfo = require("../configs/index")

module.exports = function(req, res, next){
  let token;
  if(req.headers['x-access-token']) {
    token = req.headers['x-access-token'];
  }
  if(req.headers['authorization']) {
    let tokenInfo = req.headers.authorization.split(' ');
    token = tokenInfo[1];
  }
  if(req.headers['token']) {
    token = req.headers['token'];
  }
  if(req.query['token']) {
    token = req.query['token'];
  }
  if(token){
    jwt.verify(token, "lfTechnology", function(err, authData){
      if(err){
        next({err});
      }
      next();
    })
  } else {
    next({
      msg: 'Token is not provided'
    })
  }
}