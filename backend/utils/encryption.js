const bcrypt = require("bcryptjs");
const SALT = '$2a$10$E5YNdzhXLte3zKgMeT8Fgu';

//encrypt string using salt
function encrypt(str, callBack) {
  //Generate unique salt or encryption key
  // bcrypt.genSalt(10, function(err, salt) {
  //   console.log('Salt > >', salt);
  // });
  bcrypt.hash(str, SALT, function(err, hash) {
    callBack(err, hash);
  });
}

function comparePassword(str, callBack) {
  bcrypt.compare(str, hash, function(err, res) {
    callBack(err, res);
  });
}

module.exports = { encrypt, comparePassword };