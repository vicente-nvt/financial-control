var CommitmentManager = require('../../application/commitment-manager')
var CommitmentBuilder = require('../helpers/commitmentBuilder')

describe('Commitment manager tests', () => {
  it('addCommitment method should call repository passing a Commitment', () => {
    const description = 'A new commitment'
    const expectedValue = 1000
    const expiryDate = '2018-10-01'
    const movementIndicator = 0
    const plotNumber = 1
    const totalOfPlots = 10
    let commitmentRepository = jasmine.createSpyObj('CommitmentRepository', ['addCommitment'])
    let commitmentManager = new CommitmentManager()
    commitmentManager.commitmentRepository = commitmentRepository
    commitmentManager.databaseConnection = jasmine.createSpyObj('DatabaseConnection', ['addCommitment'])
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

    commitmentManager.addCommitment(commitment)

    expect(commitmentRepository.addCommitment).toHaveBeenCalledWith(expectedCommitment)
  })
})
