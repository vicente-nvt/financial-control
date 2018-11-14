var mySql = require("mysql");
var migration = require("mysql-migrations");

var connection = mySql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "financialcontrol"
});

const path = __dirname + "/migrations";
migration.init(connection, path);