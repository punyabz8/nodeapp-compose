let mysql = require("mysql");
let connectionParam = {
  host: "10.10.4.126",
  user: "zeno",
  password: "PAss@1@2",
  database: "nodeapp"
};
let conn = null;

function connectToDB(){
  try{
    conn = mysql.createConnection(connectionParam);
  } catch (e){
    console.log("DB connection failed: >> ", e);
  }
  return conn;
}

module.exports = { connectToDB, conn };