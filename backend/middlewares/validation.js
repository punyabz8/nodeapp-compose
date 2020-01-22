module.exports = function validation(req, res, next) {
  validateForm(req.body, result => {
    // console.log("Err message>>>", typeof result,result);
    for (var prop in result) {
      if (Object.hasOwnProperty(prop)) {
        next({
          status:422,
          msg: "Invalid input (sent from vaidation)..."
        });
      }
    }
    next();
  });
};

function validateForm(data, callBack) {
  const validator = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /(^[a-zA-Z]).{5,20}/,
    userName: /^([a-zA-Z])[a-zA-Z0-9]{3,20}$/,
    name: /^[a-zA-Z]{2,}$/
  };
  let keys = Object.keys(data);
  let message = {};
  keys.forEach(element => {
    // console.log('<------------------------------------------>', element)
    switch (element) {
      case "userName": {
        // console.log("validate username", validator[element].test(data[element]));
        if (validator[element].test(data[element]) !== true) {
          message.errUserName =
            "User name must contain atleast 4 character with or without numbers only";
        }
        break;
      }
      case "password": {
        // console.log("validate password", validator[element].test(data[element]));
        if (validator[element].test(data[element]) !== true) {
          message.errPassword =
            "Password cannot be empty and lower than 8 characters";
        }
        break;
      }
      case "email": {
        // console.log("validate email",validator[element].test(data[element]));
        if (validator[element].test(data[element]) !== true) {
          message.errEmail = "Invalid Email address.";
        }
        break;
      }
      case "fName": {
        // console.log("validate fName",validator[name].test(data[element]));
        if (validator.name.test(data[element]) !== true) {
          message.errFirstName = "Invalid first name";
        }
        break;
      }
      case "lName": {
        // console.log("validate lName",validator[name].test(data[element]));
        if (validator.name.test(data[element]) !== true) {
          message.errLastName = "Invalid last name";
        }
        break;
      }
      default: {
        // man wrong fieldname than database so correct it
        console.log("this message from default");
        if (validator[element].test(data[element]) !== true) {
          message.errEmail = "Invalid Email address.";
        }
        break;
      }
    }
  });
  callBack(message);
}
