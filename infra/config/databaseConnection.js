var mongoose = require('mongoose');

var connectDatabase = (databaseConnectionString) => {    
    return connect(databaseConnectionString);
}

var checkConnection = (databaseConnectionString) => {
    if (mongoose.connection.readyState !== 1)
        return connect(databaseConnectionString)
}

var connect = (databaseConnectionString) => {
    return mongoose.connect(databaseConnectionString, { useNewUrlParser: true });
}

module.exports = {
    connectDatabase: connectDatabase,
    checkConnection: checkConnection
}
