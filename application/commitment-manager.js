var CommitmentRepository = require('../domain/commitment/repository')
var DatabaseConnection = require('../infra/config/dbConnection')
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
    return this.commitmentRepository.addCommitment(commitment)
  }
}

module.exports = CommitmentManager
