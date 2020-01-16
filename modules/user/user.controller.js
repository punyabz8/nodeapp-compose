const userQuery = require("./user.query");
const jwt = require("jsonwebtoken");
const tokenInfo = require("../../configs/index");

function selectAll(req, res, next) {
  userQuery.selectAll((err, rows) => {
    if (err != null) {
      next({
        message: "Following error occured...",
        err: err
      });
    } else {
      res.json({ rows });
    }
  });
}

function insert(req, res, next) {
  userQuery.insert(req.body, (err, result) => {
    if (err != null) {
      next({
        message: "Following error occured...",
        err: err
      });
    } else {
      res.json({ success: "user inserted successfully" });
    }
  });
}

function updateById(req, res, next) {
  userQuery.updateById(req.body, req.params.id, (err, done) => {
    if (err != null) {
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
    if (err != null) {
      next({
        message: "Following error occured...",
        err: err
      });
    } else {
      res.json({ success: "user deleted successfully" });
    }
  });
}

function login(req, res, next) {
  let token;
  if(req.body.email){
    userQuery.login(req.body.email, (err, done) => {
      if (err !== null) {
        next({
          message: "Following error occured...",
          err
        });
      } else {
        if (done[0].password === req.body.password) {
          token = jwt.sign(done[0].id, tokenInfo.secret);
        }
        res.json({ msg: "token created", token });
      }
    });
  } else {
    next({
      message: "Please input valid email and password",
    })
  }
}
module.exports = { selectAll, insert, updateById, deleteById, login };
