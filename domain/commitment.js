var { validate, isNullOrUndefined } = require('./validator');
var Movement = require('./movement')

class Commitment {
  constructor(description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots) {
    this.validateEntryData(description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots)

    this.description = description
    this.expectedValue = expectedValue
    this.effectiveValue = expectedValue
    this.expiryDate = expiryDate
    this.movementIndicator = movementIndicator
    this.plotNumber = plotNumber
    this.totalOfPlots = totalOfPlots
  }

  validateEntryData(description, expectedValue, expiryDate, movementIndicator, plotNumber, totalOfPlots) {
    validate(isNullOrUndefined(description) || description.trim() === '', 'It is not possible to create a commitment without a valid description')
    validate(isNullOrUndefined(expectedValue) || expectedValue <= 0, 'It is not possible to create a commitment without a valid expected value')
    validate(isNullOrUndefined(expiryDate), 'It is not possible to create a commitment without a valid expiry date')
    validate(Object.values(Movement).indexOf(movementIndicator) === -1, 'It is not possible to create a commitment without a valid movement indicator')
    validate(isNullOrUndefined(plotNumber) || plotNumber <= 0, 'It is not possible to create a commitment without a valid plot number')
    validate(isNullOrUndefined(totalOfPlots) || totalOfPlots <= 0, 'It is not possible to create a commitment without a valid total of plots')
    validate(totalOfPlots < plotNumber, 'It is not possible to create a commitment with total plots count less than plot number')
  }
}

module.exports = Commitment
