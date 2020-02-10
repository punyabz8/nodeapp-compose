let mysql = require("mysql");
let connectionParam = {
  host: "db",
  user: "root",
  password: "ROot@123",
  database: "nodeapp"
};
let conn = null;

//dbuser zeno pass PAss@1@2
function connectToDB(){
  try{
    conn = mysql.createConnection(connectionParam);
  } catch (e){
    console.log("DB connection failed: >> ", e);
  }
  return conn;
}

module.exports = { connectToDB, conn };
