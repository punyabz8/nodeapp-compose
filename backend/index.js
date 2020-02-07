const express = require("express");
const app = express();
const PORT = process.env.PORT || 9090;
const API_ROUTE = require("./routes/api.route");
const MORGAN = require("morgan");
const cors = require("cors")

//third party middleware
//helps to create log at runtime
app.use(MORGAN('dev'));
//inbuild middlewares for pharsing
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

//Routing middlewares using router
app.use("/api", API_ROUTE);
// app.use("/user", require("./controllers/user.route"));

//Application level middleware to check url status
app.use(function(req, res, next) {
  next({
    status: 404,
    message: "Page Not Found!!!"
  });
});

//Error handling middleware to return error to client
app.use(function(err, req, res, next) {
  res.status(err.status||400).json({
    message: "Following error occured :",
    err: err
  });
});

app.listen(PORT, function() {
  console.log("server listening to port :", PORT);
});
module.exports = app;
