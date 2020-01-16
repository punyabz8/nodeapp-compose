function selectAll(tableName){
  return "SELECT * FROM " + tableName;
}

function insert(tableName, obj){
  let mySqlQuery = "INSERT INTO " + tableName + "(";
  let tableFields = [];
  for(let key in obj){
    tableFields.push(key);
    mySqlQuery += "`" + key + "`, ";
  }
  mySqlQuery = mySqlQuery.slice(0, mySqlQuery.length - 2);
  mySqlQuery += ") VALUES (";
  for(let key in obj){
    mySqlQuery += "'" + obj[key] + "', ";
  }
  mySqlQuery = mySqlQuery.slice(0, mySqlQuery.length - 2);
  mySqlQuery += ")";

  return mySqlQuery;
}

function updateById(tableName, obj, id){
  let mySqlQuery = "UPDATE " + tableName + " SET ";
  for(let key in obj){
    if(key !== 'id'){
      mySqlQuery += "`" + key + "` = '" + obj[key] + "', ";
    }
  }
  mySqlQuery = mySqlQuery.slice(0, mySqlQuery.length - 2);
  mySqlQuery += " WHERE `id` = " + id;
  return mySqlQuery;
}

function deleteById(tableName, id){
  return "DELETE FROM " + tableName + " WHERE `id` = " + id;
}

module.exports = {selectAll, insert, deleteById, updateById};