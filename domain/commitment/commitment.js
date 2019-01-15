var validator = require('../../helpers/validator')

class Commitment {
  constructor (
    description,
    expectedValue,
    expiryDate,
    movimentIndicator,
    plotNumber,
    totalPlots
  ) {
    this.validateEntryData(description, expectedValue)

    this.description = description
    this.expectedValue = expectedValue
    this.effectiveValue = expectedValue
    this.expiryDate = expiryDate
    this.movimentIndicator = movimentIndicator
    this.plotNumber = plotNumber
    this.totalPlots = totalPlots
  }

  validateEntryData (description, expectedValue) {
    this.validateDescription(description)
    this.validateExpectedValue(expectedValue)
  }

  validateExpectedValue (expectedValue) {
    validator.validate(
      expectedValue == undefined ||
        expectedValue == null ||
        expectedValue === 0,
      'It is not possible to create a commitment without a valid expected value'
    )
  }

  validateDescription (description) {
    validator.validate(
      description == undefined ||
        description.trim() === null ||
        description.trim() === '',
      'It is not possible to create a commitment without a valid description'
    )
  }
}

module.exports = Commitment
