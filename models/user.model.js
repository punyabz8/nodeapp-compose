const connection = require("../db/db");
let mySqlQuery = '';
const queryGenerator = require('../models/query.generator')

function selectAllUser(userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.selectAll('user');
  conn.query(mySqlQuery, function(err, rows, fields) {
    err ? userCallBack(err, err) : userCallBack(err, rows);
  });
  conn.end();
}

function insertUser(data, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.insert('user', data);
  conn.query(mySqlQuery, function(err, result) {
    err ? userCallBack(err, err) : userCallBack(err, result);
  });
  conn.end();
}

function updateUser(data, id, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.updateById('user', data, id);
  conn.query(mySqlQuery, function(err, result) {
    err ? userCallBack(err, err) : userCallBack(err, result);
  });
  conn.end();
}

function deleteUser(id, userCallBack) {
  let conn = connection();
  mySqlQuery = queryGenerator.deleteById('user', id);
  conn.query(mySqlQuery, function(err, result) {
    err ? userCallBack(err, err) : userCallBack(err, result);
  });
  conn.end();
}

module.exports = { selectAllUser, insertUser, deleteUser, updateUser };
