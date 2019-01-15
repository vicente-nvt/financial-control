var mySQLConnection = require("./mySQLConnection");

class DatabaseConnection {

    constructor() {
        this.connection = mySQLConnection;
    }

    getAll(tableName){
        var sql = `select * from ${tableName}`;
        return this.executeQuery(sql);
    }

    getById(tableName, id) {
        var sql = `select * from ${tableName} where id = ${id}`;
        return this.executeQuery(sql);
    }

    add(tableName, data) {
        var sql = `insert into ${tableName} set ?`;

        return new Promise(async (resolve, reject) => {
            await this.connection().query(sql, data, (error) => {
                if (error)
                    this.handleError(error, reject);

                resolve();
            });
        });
    }

    executeQuery(sql) {
        return new Promise(async (resolve, reject) => {
            await this.connection().query(sql, (error, result) => {
                if (error)
                    this.handleError(error, reject);

                resolve(result);
            });
        });
    }

    handleError(error, reject){
        if (error.code === 'ECONNREFUSED')
            reject("Database connection refused");
        else
            reject(error);
    }
}

module.exports = DatabaseConnection;