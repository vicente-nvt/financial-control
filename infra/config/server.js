var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var configureDatabase = require('./database/middleware')
var configuration = require('./configuration')

var app = express()

let databaseConnection = configureDatabase(configuration.databaseConnectionString)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(databaseConnection.checkConnection)
app.database = databaseConnection.getDatabase();

consign()
  .include('infra/routes')
  .into(app)

app.listen(configuration.port);

module.exports = app
