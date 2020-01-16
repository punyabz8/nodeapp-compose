module.exports = function validation(req, res, next) {
  console.log("This is from validation middleware>> ", req.body);
  validateForm(req.body);
  next();
};

function validateForm(data) {
  let keys = Object.keys(data);
  keys.forEach(element => {
    console.log("element from validation >>",element);
    switch (element) {
      case "userName": {
        //validate username
        let result = validateUserName(data[element]);
        console.log(result)
      }
      case "password": {
        //validaet password
      }
      case "email": {
        //validate email
      }
      case "fName": {
        //validaet password
      }
      case "lName": {
        //validate lname
      }
      default: {
        // man wrong fieldname than database so correct it
      }
    }
  });
}

function validateUserName(userName) {
  let validator = /[a-zA-Z]{3,*}+(\d+)?/;
  if (userName === '') {
    return null;
  } else {
    if(validator.exec(userName)){
      return true;
    } else {
      return false;
    }
  }
}
