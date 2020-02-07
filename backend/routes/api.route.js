const router = require("express").Router();
const userRoute = require("../modules/user/route/user.route");
const authenticate = require('../middlewares/authenticate')


router.use("/user", userRoute);

module.exports = router;
