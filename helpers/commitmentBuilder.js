let Commitment = require('../domain/commitment/commitment')
let Movement = require('../domain/commitment/movement')

class CommitmentBuilder {
  constructor () {
    this.description = 'A new commitment'
    this.expectedValue = 1000.0
    this.expiryDate = new Date(2018, 1, 30)
    this.movementIndicator = Movement.IN
    this.plotNumber = 1
    this.totalOfPlots = 10
  }

  static new () {
    return new CommitmentBuilder()
  }

  withDescription (description) {
    this.description = description
    return this
  }

  withExpectedValue (expectedValue) {
    this.expectedValue = expectedValue
    return this
  }

  withExpiryDate (expiryDate) {
    this.expiryDate = expiryDate
    return this
  }

  withMovementIndicator (movementIndicator) {
    this.movementIndicator = movementIndicator
    return this
  }

  withPlotNumber (plotNumber) {
    this.plotNumber = plotNumber
    return this
  }

  withTotalOfPlots (totalOfPlots) {
    this.totalOfPlots = totalOfPlots
    return this
  }

  build () {
    return new Commitment(
      this.description,
      this.expectedValue,
      this.expiryDate,
      this.movementIndicator,
      this.plotNumber,
      this.totalOfPlots
    )
  }
}

module.exports = CommitmentBuilder
