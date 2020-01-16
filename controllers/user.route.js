const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router
  .route("/")
  .get(function(req, res, next) {
    userModel.selectAllUser((err, rows) => {
      if (err != null) {
        next({
          message: "Following error occured...",
          err: err
        });
      } else {
        res.json({ rows });
      }
    });
  })
  .post(function(req, res, next) {
    userModel.insertUser(req.body, (err, result) => {
      if (err != null) {
        next({
          message: "Following error occured...",
          err: err
        });
      } else {
        res.json({ success: "user inserted successfully" });
      }
    });
  })
  
router.route("/:id")
.put(function(req, res, next) {
  userModel.updateUser(req.body, req.params.id, (err, done) => {
    if (err != null) {
      next({
        message: "Following error occured...",
        err
      });
    } else {
      res.json({ success: "data updated done successfully." });
    }
  });
})
.delete(function(req, res, next) {
  userModel.deleteUser(req.params.id, (err, result) => {
    if (err != null) {
      next({
        message: "Following error occured...",
        err: err
      });
    } else {
      res.json({ success: "user deleted successfully" });
    }
  });
})

module.exports = router;
