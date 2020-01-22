let mysql = require("mysql");
let connectionParam = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeapp"
};
let conn = null;

function connectToDB(){
  try{
    conn = mysql.createConnection(connectionParam);
  } catch (e){
    console.log("DB connection failed:>> ", e);
  }
  return conn;
}


module.exports = { connectToDB, conn };