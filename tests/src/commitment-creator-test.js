var CommitmentCreator = require('../../application/commitment-creator')
var CommitmentBuilder = require('../helpers/commitment-builder')

describe('Commitment manager tests', () => {
  it('addCommitment method should call repository passing a Commitment', () => {
    const description = 'A new commitment'
    const expectedValue = 1000
    const expiryDate = '2018-10-01'
    const movementIndicator = 0
    const plotNumber = 1
    const totalOfPlots = 10
    const promisedCommitment = { _id: 1 }
    let commitmentRepository = jasmine.createSpyObj('CommitmentRepository', ['addCommitment'])
    commitmentRepository.addCommitment.and.returnValue(Promise.resolve(promisedCommitment))
    let commitmentCreator = new CommitmentCreator(commitmentRepository)
    var expectedCommitment = CommitmentBuilder.new()
      .withDescription(description)
      .withExpectedValue(expectedValue)
      .withExpiryDate(expiryDate)
      .withMovementIndicator(movementIndicator)
      .withPlotNumber(plotNumber)
      .withTotalOfPlots(totalOfPlots)
      .build()
    var commitment = {
      description: description,
      expectedValue: expectedValue,
      expiryDate: expiryDate,
      movementIndicator: movementIndicator,
      plotNumber: plotNumber,
      totalOfPlots: totalOfPlots
    }

    commitmentCreator.addCommitment(commitment)

    expect(commitmentRepository.addCommitment).toHaveBeenCalledWith(expectedCommitment)
  })
})