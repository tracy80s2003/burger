const connection = require("./connection");

const orm = {
  // selectAll()
  selectAll: function(table, cb){
    let query = `
    SELECT *
    FROM ??`

    connection.query(query, [table], (err, data) => {
      if(err) throw err;
      console.log(data)
      cb(data)
    });
  },
  insertOne: function(table,cols,vals,cb){
	  const queryString = "INSERT INTO " + table;

	  queryString += "(";
	  queryString += cols.toString();
	  queryString += ")";
	  queryString += "VALUES (";
	  queryString += printQuestionMarks(vals.length);
	  queryString += ")";

	  console.log(queryString);

	  connection.query(queryString,vals, function(err, results){
		  if(err) throw err;
		  cb(results);
	});
},

  updateOne: function(table, objColVals, condition, cb){
	  const queryString = "UPDATE " + table;

	  queryString += "SET";
	  queryString += objToSql(objColVals);
	  queryString += " WHERE ";
	  queryString += condition;

	  console.log(queryString);
	  connection.query(queryString, function(err, results){
		  if(err) throw err;
		  cb(result);
	  });
  },
};

// export the orm object
module.exports = orm;