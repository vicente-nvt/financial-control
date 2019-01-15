var Commitment = require('../domain/commitment/commitment')

describe('Commitment creation', () => {
  let commitment

  const expectedDescription = 'A new Commitment'
  const expectedValue = 1000.0
  const expectedExpiryDate = new Date(2018, 11, 01)
  const expectedMovementIndicator = 0
  const expectedPlotNumber = 1
  const expectedTotalOfPlots = 10

  beforeEach(() => {
    commitment = new Commitment(
      expectedDescription,
      expectedValue,
      expectedExpiryDate,
      expectedMovementIndicator,
      expectedPlotNumber,
      expectedTotalOfPlots
    )
  })

  it('should create a commitment with a description', () => {
    expect(expectedDescription).toEqual(commitment.description)
  })

  it('should not create a commitment without description', () => {
    const expectedMessage =
      'It is not possible to create a commitment without a valid description'
    let testCases = ['', ' ', null]

    testCases.forEach(test => {
      let act = () =>
        new Commitment(
          test,
          expectedValue,
          expectedExpiryDate,
          expectedMovementIndicator,
          expectedPlotNumber,
          expectedTotalOfPlots
        )
      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should create a commitment with expected value', () => {
    expect(expectedValue).toEqual(commitment.expectedValue)
  })

  it('should not create a commitment without a defined expected value', () => {
    let expectedMessage =
      'It is not possible to create a commitment without a valid expected value'
    let testCases = [undefined, null, 0]

    testCases.forEach(test => {
      let act = () =>
        new Commitment(
          expectedDescription,
          test,
          expectedExpiryDate,
          expectedMovementIndicator,
          expectedPlotNumber,
          expectedTotalOfPlots
        )

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should fill effective value with expected value on creation', () => {
    expect(expectedValue).toEqual(commitment.effectiveValue)
  })

  it('should create a commitment with expiry date', () => {
    expect(expectedExpiryDate).toEqual(commitment.expiryDate)
  })

  it('should create a commitment with movement indicator', () => {
    expect(expectedMovementIndicator).toEqual(commitment.movimentIndicator)
  })

  it('should create a commitment with the plot number', () => {
    expect(expectedPlotNumber).toEqual(commitment.plotNumber)
  })

  it('should create a commitment with the total plots number', () => {
    expect(expectedTotalOfPlots).toEqual(commitment.totalPlots)
  })
})
