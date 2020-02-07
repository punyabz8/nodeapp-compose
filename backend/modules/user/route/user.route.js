const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authenticate = require("../../../middlewares/authenticate");
const validation = require("../../../middlewares/validation");

router
  .route("/")
  .get(authenticate, userController.selectAll);

router
  .route("/:id")
  .put(authenticate, userController.updateById)
  .delete(authenticate, userController.deleteById);

router.route("/register").post(userController.insert);

router.route("/login").post(validation, userController.login);
module.exports = router;
