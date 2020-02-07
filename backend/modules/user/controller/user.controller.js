const userQuery = require("../query/user.query");
const jwt = require("jsonwebtoken");
const tokenInfo = require("../../../configs/index");
const bcrypt = require("../../../utils/encryption");

function selectAll(req, res, next) {
  userQuery.selectAll((err, result) => {
    if (Object.keys(result).length === 0) {
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
  bcrypt.encrypt(req.body.password, (err, encryptResult) => {
    req.body.password = encryptResult;
    userQuery.insert(req.body, (err, result) => {
      if (Object.keys(result).length === 0) {
        next({
          message: "Following error occured...",
          err
        });
      } else {
        res.json({ success: "user inserted successfully" });
      }
    });
  });
}

function updateById(req, res, next) {
  if (req.body.hasOwnProperty("password")) {
    req.body.password = encrypt(req.body.password);
  }
  userQuery.updateById(req.body, req.params.id, (err, done) => {
    if (Object.keys(result).length === 0) {
      next({
        err
      });
    } else {
      res.json({ success: "data updated done successfully." });
    }
  });
}

function deleteById(req, res, next) {
  userQuery.deleteById(req.params.id, (err, result) => {
    if (Object.keys(result).length === 0) {
      next({
        err
      });
    } else {
      res.json({ success: "user deleted successfully" });
    }
  });
}

function login(req, res, next) {
  userQuery.login(req.body.email, (err, result) => {
    if (result === undefined || result === null || Object.keys(result).length < 1) {
      next({
        status: 403,
        err: { errRegister: "It appears that you are not registered yet", err }
      });
    } else {
      bcrypt.encrypt(req.body.password, (err, encryptResult) => {
        if(encryptResult === result[0].password){
          jwt.sign({id: result[0].id}, 'lfTechnology', (err, token) =>{
            userData = {
              fName: result[0].fName,
              lName: result[0].lName,
              email: result[0].email
            };
            res.json({ msg: "token created", token, userData });
          });
        } else {
          next({
            status: 401,
            message: "UnAuthorized"
          });
        }
      });
    }
  });
}
module.exports = { selectAll, insert, updateById, deleteById, login };
