var Validator = require('../helpers/validator')
var Movement = require('./movement')

class Commitment {
  constructor (description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots) {
    this.validateEntryData(description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots)

    this.description = description
    this.expectedValue = expectedValue
    this.effectiveValue = expectedValue
    this.expiryDate = expiryDate
    this.movementIndicator = movementIndicator
    this.plotNumber = plotNumber
    this.totalOfPlots = totalOfPlots
  }

  validateEntryData (description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots) {
    this.validateDescription(description)
    this.validateExpectedValue(expectedValue)
    this.validateExpiryDate(expiryDate)
    this.validateMovementIndicator(movementIndicator)
    this.validatePlotNumber(plotNumber)
    this.validateTotalOfPlots(totalOfPlots)

    Validator.validate(
      totalOfPlots < plotNumber,
      'It is not possible to create a commitment with total plots count less than plot number'
    )
  }

  validateTotalOfPlots (totalOfPlots) {
    Validator.validate(
      isNullOrUndefined(totalOfPlots) || totalOfPlots <= 0,
      'It is not possible to create a commitment without a valid total of plots'
    )
  }

  validatePlotNumber (plotNumber) {
    Validator.validate(
      isNullOrUndefined(plotNumber) || plotNumber <= 0,
      'It is not possible to create a commitment without a valid plot number'
    )
  }

  validateMovementIndicator (movementIndicator) {
    Validator.validate(
      Object.values(Movement).indexOf(movementIndicator) === -1,
      'It is not possible to create a commitment without a valid movement indicator'
    )
  }

  validateExpiryDate (expiryDate) {
    Validator.validate(
      isNullOrUndefined(expiryDate),
      'It is not possible to create a commitment without a valid expiry date'
    )
  }

  validateExpectedValue (expectedValue) {
    Validator.validate(
      isNullOrUndefined(expectedValue) || expectedValue <= 0,
      'It is not possible to create a commitment without a valid expected value'
    )
  }

  validateDescription (description) {
    Validator.validate(
      isNullOrUndefined(description) || description.trim() === '',
      'It is not possible to create a commitment without a valid description'
    )
  }
}

function isNullOrUndefined (value) {
  return value == undefined || value == null
}

module.exports = Commitment
