const userQuery = require("./user.query");
const jwt = require("jsonwebtoken");
const tokenInfo = require("../../configs/index");
const bcrypt = require("../../utils/encryption");

function selectAll(req, res, next) {
  userQuery.selectAll((err, result) => {
    if (result.length === 0) {
      next({
        message: "Following error occured...",
        err
      });
    } else {
      res.json({ result });
    }
  });
}

function insert(req, res, next) {
  bcrypt.encrypt(req.body.password, (err, res) =>{
    console.log("Encryption err > >", err);
    req.body.password = res;
  });
  userQuery.insert(req.body, (err, result) => {
    if (result.length === 0) {
      next({
        message: "Following error occured...",
        err
      });
    } else {
      res.json({ success: "user inserted successfully" });
    }
  });
}

function updateById(req, res, next) {
  if(req.body.hasOwnProperty('password')){
    req.body.password = encrypt(req.body.password);
  }
  userQuery.updateById(req.body, req.params.id, (err, done) => {
    if (result.length === 0) {
      next({
        message: "Following error occured...",
        err
      });
    } else {
      res.json({ success: "data updated done successfully." });
    }
  });
}

function deleteById(req, res, next) {
  userQuery.deleteById(req.params.id, (err, result) => {
    if (result.length === 0) {
      next({
        message: "Following error occured...",
        err
      });
    } else {
      res.json({ success: "user deleted successfully" });
    }
  });
}

function login(req, res, next) {
  let token;
  console.log(bcrypt)
  userQuery.login(req.body.email, (err, result) => {
    if (result.length === 0) {
      next({
        status: 403,
        message: "Following error occured...",
        err: { errRegister: "It appears that you are not registered yet" }
      });
    } else {
      bcrypt.decrypt(result[0].password, (err, res) =>{
        console.log("Error of decrypt >", err)
        result[0].password = res;
      });
      if (result[0].password === req.body.password) {
        token = jwt.sign(result[0].id, tokenInfo.secret);
        userData = {
          fName: result[0].fName,
          lName: result[0].lName,
          email: result[0].email
        };
        res.json({ msg: "token created", token, userData });
      } else {
        next({
          status: 401,
          message: "UnAuthorized"
        });
      }
      
    }
  });
}
module.exports = { selectAll, insert, updateById, deleteById, login };
