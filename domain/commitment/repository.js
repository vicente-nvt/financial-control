class CommitmentRepository {
  constructor (dbConnection) {
    this.dbConnection = dbConnection
  }

  getCommitments () {
    return this.dbConnection.getAll('commitment')
  }

  getCommitment (commitmentId) {
    return this.dbConnection.getById('commitment', commitmentId)
  }

  addCommitment (commitment) {
    return this.dbConnection.add('commitment', commitment)
  }
}

module.exports = CommitmentRepository
