var CommitmentRepository = require('../domain/repository')
var DatabaseConnection = require('../infra/database/dbConnection')
var Commitment = require('../domain/commitment')

class CommitmentManager {
  constructor () {
    this.databaseConnection = new DatabaseConnection()
    this.commitmentRepository = new CommitmentRepository(this.databaseConnection)
  }

  getCommitments () {
    return this.commitmentRepository.getCommitments()
  }

  getCommitment (commitmentId) {
    return this.commitmentRepository.getCommitment(commitmentId)
  }

  addCommitment (commitment) {
    let commitmentCreated = new Commitment(
      commitment.description,
      commitment.expectedValue,
      commitment.expiryDate,
      commitment.movementIndicator,
      commitment.plotNumber,
      commitment.totalOfPlots
    )

    return this.commitmentRepository.addCommitment(commitmentCreated)
  }
}

module.exports = CommitmentManager
