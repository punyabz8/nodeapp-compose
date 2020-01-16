let mysql = require("mysql");
let connectionParam = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeapp"
};

function connectToDB(){
  let connection = mysql.createConnection(connectionParam);
  return connection;
}

module.exports = connectToDB;