/*  Connect to DB using mysql2 package.
    Resources: https://andrew-lundy.medium.com/using-mysql-with-express-routes-f607ee9106d8   */
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : null,
    database : 'college-app'
});

connection.connect((err => {
    // if(err) throw err;
    if(err) console.log(err);
    console.log('MySQL Connected');
}));

exports.databaseConnection = connection;