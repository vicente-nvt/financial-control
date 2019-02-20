var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var databaseConnection = require('./databaseConnection')
var configuration = require('./configuration')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('databaseConnection', databaseConnection.connectDatabase(configuration.databaseConnectionString));

app.use((req, res, next) => {
  databaseConnection.checkConnection();

  next(req, res);
})

consign()
  .include('infra/routes')
  .into(app)

app.listen(configuration.port);

module.exports = app
