let mySqlQuery = "";
let {connectToDB, conn} = require("../../../db/db");
const queryGenerator = require("../../../db/query.generator");

function selectAll(userCallBack) {
  if(conn === null){
    conn = connectToDB();
  }
  mySqlQuery = queryGenerator.selectAll("user");
  conn.query(mySqlQuery, function(err, result, fields) {
    err ? userCallBack(err, result) : userCallBack(err, result);
  });
}

function insert(data, userCallBack) {
  if(conn === null){
    conn = connectToDB();
  }
  mySqlQuery = queryGenerator.insert("user", data);
  conn.query(mySqlQuery, function(err, done) {
    err ? userCallBack(err, err) : userCallBack(err, done);
  });
}

function updateById(data, id, userCallBack) {
  if(conn === null){
    conn = connectToDB();
  }
  mySqlQuery = queryGenerator.selectById("user", id);
  conn.query(mySqlQuery, function(err, done) {
    if (err === null) {
      mySqlQuery = queryGenerator.updateById("user", data, id);
      conn.query(mySqlQuery, function(err, done) {
        err ? userCallBack(err, err) : userCallBack(err, done);
      });
    } else {
      userCallBack(err, done);
    }
  });
}

function deleteById(id, userCallBack) {
  if(conn === null){
    conn = connectToDB();
  }
  mySqlQuery = queryGenerator.deleteById("user", id);
  conn.query(mySqlQuery, function(err, done) {
    err ? userCallBack(err, err) : userCallBack(err, done);
  });
}

function login(email, userCallBack) {
  if(conn === null){
    try{
      conn = connectToDB();
    } catch (e){
      
    }
  } 
  mySqlQuery = queryGenerator.selectByEmail("user", email);
  conn.query(mySqlQuery, function(err, result, fields) {
    if (err) {
      userCallBack(err, result);
    } else {
      userCallBack(err, result);
    }
  });
  
}

module.exports = { selectAll, insert, deleteById, updateById, login };
