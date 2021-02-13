const mysql = require('mysql')
const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
const PORT = process.env.PORT || 3000
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect mysql
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'burgers_db',
  password : 'rootroot',
});