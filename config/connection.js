const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'burgers_db'
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = mysql