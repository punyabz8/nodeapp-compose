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
  console.log(conn);
  if(conn === null){
    try{
      conn = connectToDB();}
    catch(e){
      console.log("connection err", e);
    }
  }
  mySqlQuery = queryGenerator.insert("user", data);
  try{
    conn.query(mySqlQuery, function(err, done) {
      err ? userCallBack(err, err) : userCallBack(err, done);
    });

  }
  catch(e){
    console.log('Error in data insertion :', e);
  }
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
      console.log('error connection with db',e);
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
  conn.close();
}

module.exports = { selectAll, insert, deleteById, updateById, login };
