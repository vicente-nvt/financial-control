var DatabaseConnection = require('./connection')

module.exports = (databaseConnectionString) => {
    let databaseConnection = new DatabaseConnection(databaseConnectionString);

    var checkConnection = (req, res, next) => {
        databaseConnection.checkConnection()
            .then(() => {
                next();
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    }

    var getDatabase = () => {
        return databaseConnection.getDatabase();
    }

    return {
        checkConnection: checkConnection,
        getDatabase: getDatabase
    }
}