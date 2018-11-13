var mySQLConnection = require("./mySQLConnection");

class DatabaseConnection {

    constructor() {
        this.connection = mySQLConnection;
    }

    getAll(tableName, callback){
        var sql = `select * from ${tableName}`;
        this.executeQuery(sql, callback);
    }

    add(tableName, data, callback){
        var sql = `insert into ${tableName} set ?`;
        this.insertData(sql, data, callback);
    }

    insertData(sql, data, callback){
        this.connection().query(sql, data, (error, result) => {
            this.handleQueryCallback(error, result, callback);
        });
    }

    executeQuery(sql, callback) {
        this.connection().query(sql, (error, result) => {
            this.handleQueryCallback(error, result, callback);
        });
    }

    handleQueryCallback(error, result, callback) {
        console.log(error);
        if (error)
            callback(error);

        callback(result);
    }
}

module.exports = DatabaseConnection;