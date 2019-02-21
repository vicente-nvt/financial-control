var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var configureDatabase = require('./config/database/middleware')
var configuration = require('./config/configuration')

var appServer = express()

let databaseConnection = configureDatabase(configuration.databaseConnectionString)

appServer.use(bodyParser.json())
appServer.use(bodyParser.urlencoded({ extended: true }))
appServer.use(databaseConnection.checkConnection)
appServer.database = databaseConnection.getDatabase()
appServer.port = configuration.port

consign()
  .include('infra/routes')
  .into(appServer)

module.exports = appServer