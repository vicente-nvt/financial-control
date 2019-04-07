const DatabaseConnection = require('./connection')

module.exports = (databaseConnectionString) => {
	let databaseConnection = new DatabaseConnection(databaseConnectionString)

	let checkConnection = (req, res, next) => {
		databaseConnection.checkConnection()
			.then(() => {
				next()
			})
			.catch((error) => {
				res.status(500).send(error)
			})
	}

	let getDatabase = () => {
		return databaseConnection.getDatabase()
	}

	return {
		checkConnection: checkConnection,
		getDatabase: getDatabase
	}
}