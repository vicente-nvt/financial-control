var mySql = require('mysql');

var mySqlConnection = () => {
    return mySql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "financialcontrol"
    });
}
module.exports = mySqlConnection;