const express = require("express");
const router = express.Router();
const userCtrl = require("./user.controller");
const authenticate = require("../../middlewares/authenticate");
const validation = require("../../middlewares/validation")

router
  .route("/")
  .get(authenticate, userCtrl.selectAll)
  .post(authenticate, validation, userCtrl.insert);

router
  .route("/:id")
  .put(authenticate, userCtrl.updateById)
  .delete(authenticate, userCtrl.deleteById);

router.route("/login").post(userCtrl.login);
module.exports = router;
