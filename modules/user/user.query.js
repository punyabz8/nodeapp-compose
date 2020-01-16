let mySqlQuery = "";
const connection = require("../../db/db");
const queryGenerator = require("../../db/query.generator");

function selectAll(userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.selectAll("user");
  conn.query(mySqlQuery, function(err, rows, fields) {
    err ? userCallBack(err, err) : userCallBack(err, rows);
  });
  conn.end();
}

function insert(data, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.insert("user", data);
  conn.query(mySqlQuery, function(err, done) {
    err ? userCallBack(err, err) : userCallBack(err, done);
  });
  conn.end();
}

function updateById(data, id, userCallBack) {
  let conn = connection();
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
    conn.end();
  });
}

function deleteById(id, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.deleteById("user", id);
  conn.query(mySqlQuery, function(err, done) {
    err ? userCallBack(err, err) : userCallBack(err, done);
  });
  conn.end();
}

function login(email, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.selectByEmail("user", email);
  conn.query(mySqlQuery, function(err, done) {
    err ? userCallBack(err, err) : userCallBack(err, done);
  });
}

module.exports = { selectAll, insert, deleteById, updateById, login };
