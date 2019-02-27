var CommitmentBuilder = require('../helpers/commitment-builder')
var Movement = require('../../domain/movement')
var Payment = require('../../domain/payment')

describe('Commitment creation', () => {

  it('should create a commitment with a description', () => {
    let expectedDescription = 'Car rent'

    let commitment = CommitmentBuilder.new()
      .withDescription(expectedDescription)
      .build()

    expect(expectedDescription).toEqual(commitment.description)
  })

  it('should not create a commitment without description', () => {
    const expectedMessage = 'It is not possible to create a commitment without a valid description'
    let testCases = ['', ' ', null]

    testCases.forEach(description => {
      let act = () =>
        CommitmentBuilder.new()
          .withDescription(description)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should create a commitment with expected value', () => {
    let expectedValue = 599.99

    let commitment = CommitmentBuilder.new()
      .withExpectedValue(expectedValue)
      .build()

    expect(expectedValue).toEqual(commitment.expectedValue)
  })

  it('should not create a commitment without a defined expected value', () => {
    let expectedMessage = 'It is not possible to create a commitment without a valid expected value'
    let testCases = [undefined, null, 0, -10]

    testCases.forEach(expectedValue => {
      let act = () =>
        CommitmentBuilder.new()
          .withExpectedValue(expectedValue)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should fill effective value with expected value on creation', () => {
    let expectedValue = 499.99

    let commitment = CommitmentBuilder.new()
      .withExpectedValue(expectedValue)
      .build()

    expect(expectedValue).toEqual(commitment.effectiveValue)
  })

  it('should create a commitment with expiry date', () => {
    let expectedExpiryDate = new Date(2018, 12, 31)

    let commitment = CommitmentBuilder.new()
      .withExpiryDate(expectedExpiryDate)
      .build()

    expect(expectedExpiryDate).toEqual(commitment.expiryDate)
  })

  it('should not create a commitment without a valid expiryDate', () => {
    let expectedMessage = 'It is not possible to create a commitment without a valid expiry date'
    let testCases = [undefined, null]

    testCases.forEach(expiryDate => {
      let act = () =>
        CommitmentBuilder.new()
          .withExpiryDate(expiryDate)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should create a commitment with movement indicator', () => {
    let expectedMovementIndicator = Movement.IN

    let commitment = CommitmentBuilder.new()
      .withMovementIndicator(expectedMovementIndicator)
      .build()

    expect(expectedMovementIndicator).toEqual(commitment.movementIndicator)
  })

  it('should not create a commitment without a valid movement indicator', () => {
    let expectedMessage = 'It is not possible to create a commitment without a valid movement indicator'
    let testCases = [null, undefined, 2]

    testCases.forEach(movementIndicator => {
      let act = () =>
        CommitmentBuilder.new()
          .withMovementIndicator(movementIndicator)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should create a commitment with the plot number', () => {
    let expectedPlotNumber = 3

    let commitment = CommitmentBuilder.new()
      .withPlotNumber(expectedPlotNumber)
      .build()

    expect(expectedPlotNumber).toEqual(commitment.plotNumber)
  })

  it('should not create a commitment without a valid plot number', () => {
    let expectedMessage = 'It is not possible to create a commitment without a valid plot number'
    let testCases = [null, undefined, 0, -1]

    testCases.forEach(movementIndicator => {
      let act = () =>
        CommitmentBuilder.new()
          .withPlotNumber(movementIndicator)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should create a commitment with the total plots number', () => {
    let expectedTotalOfPlots = 5

    let commitment = CommitmentBuilder.new()
      .withTotalOfPlots(expectedTotalOfPlots)
      .build()

    expect(expectedTotalOfPlots).toEqual(commitment.totalOfPlots)
  })

  it('should not create a commitment without a valid total of plots', () => {
    let expectedMessage = 'It is not possible to create a commitment without a valid total of plots'
    let testCases = [null, undefined, 0, -1]

    testCases.forEach(movementIndicator => {
      let act = () =>
        CommitmentBuilder.new()
          .withTotalOfPlots(movementIndicator)
          .build()

      expect(act).toThrow(new Error(expectedMessage))
    })
  })

  it('should not create a commitment with total of plots less than plot number', () => {
    let expectedMessage = 'It is not possible to create a commitment with total plots count less than plot number'
    let plotNumber = 6
    let totalOfPlots = 5

    let act = () =>
      CommitmentBuilder.new()
        .withPlotNumber(plotNumber)
        .withTotalOfPlots(totalOfPlots)
        .build()

    expect(act).toThrow(new Error(expectedMessage))
  })

  it('should create a commitment with an empty array of payments', () => {
    let commitment = CommitmentBuilder.new().build();

    expect(commitment.payments).toBeDefined();
  })

  it('should create a commitment without payments', () => {
    let commitment = CommitmentBuilder.new().build();
    
    expect(commitment.hasPayments).toBe(false);
  })
})

describe ('Commitment payment', () => {
  it('Should be possible to add a payment', () => {
    let expectedValue = 100.0
    let paymentValue = 50.0
    let commitment = CommitmentBuilder.new().withExpectedValue(expectedValue).build();
    let payment = new Payment(paymentValue)

    commitment.pay(paymentValue);

    expect(commitment.payments[0]).toEqual(payment);
  })
})