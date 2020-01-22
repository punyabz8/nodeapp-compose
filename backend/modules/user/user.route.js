const express = require("express");
const router = express.Router();
const userController = require("./user.controller");
const authenticate = require("../../middlewares/authenticate");
const validation = require("../../middlewares/validation")

router
  .route("/")
  .get(userController.selectAll)
  .post(userController.insert);

router
  .route("/:id")
  .put(authenticate, userController.updateById)
  .delete(authenticate, userController.deleteById);

router.route("/login").post(validation, userController.login);
module.exports = router;
