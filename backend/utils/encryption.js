const bcrypt = require("bcryptjs");
function encrypt(str, callBack) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(str, salt, function(err, hash) {
      console.log(hash);
      callBack(err, hash);
    });
  });
}

function decrypt(str, callBack) {
  bcrypt.compare(str, hash, function(err, res) {
    callBack(err, res);
  });
}

module.exports = { encrypt, decrypt };