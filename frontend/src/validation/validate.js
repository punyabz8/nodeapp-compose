function validateForm(data, callBack) {
  const validator = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(^[a-zA-Z_]).{5,20}$/,
    userName: /^([a-zA-Z])[a-zA-Z0-9]{3,20}$/,
    name: /^[a-zA-Z]{2,}$/
  };
  
  let keys = Object.keys(data);
  let validationSuccess = true;
  let message = {};
  keys.forEach(element => {
    switch (element) {
      case "userName": {
        if (validator[element].test(data[element]) !== true) {
          message.errUserName =
            "User name must contain atleast 4 character with or without numbers only";
            validationSuccess = false;
        }
        break;
      }
      case "password": {
        if (validator[element].test(data[element]) !== true) {
          message.errPassword =
            "Password cannot be empty and lower than 6 characters and starts with alphabetic or '_";
          validationSuccess = false;
        }
        break;
      }
      case "rePassword": {
        if (data[element] !== data['password']) {
          message.errRePassword =
            "Password didn't match with previous one";
          validationSuccess = false;
        }
        break;
      }
      case "email": {
        if (validator[element].test(data[element]) !== true) {
          message.errEmail = "Invalid Email address.";
          validationSuccess = false;
        }
        break;
      }
      case "fName": {
        if (validator.name.test(data[element]) !== true) {
          message.errFName = "Name cannot be empty and must contain only alphabetic";
          validationSuccess = false;
        }
        break;
      }
      case "lName": {
        if (validator.name.test(data[element]) !== true) {
          message.errLName = "Name cannot be empty and must contain only alphabetic";
          validationSuccess = false;
        }
        break;
      }
      default: {
        console.log("this message from default for element ::", element);
        break;
      }
    }
  });
  callBack(validationSuccess, message);
}

module.exports = { validateForm };