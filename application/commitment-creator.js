var Commitment = require('../domain/commitment')

class CommitmentCreator {
  constructor(commitmentRepository) {
    this.commitmentRepository = commitmentRepository;
  }

  addCommitment(commitment) {
    return new Promise((resolve, reject) => {

      let commitmentCreated
      try {
        commitmentCreated = new Commitment(
          commitment.description,
          commitment.expectedValue,
          commitment.expiryDate,
          commitment.movementIndicator,
          commitment.plotNumber,
          commitment.totalOfPlots
        )
      } catch (error) {
        resolve(error)
      }

      this.commitmentRepository.addCommitment(commitmentCreated)
      .then(() => { resolve() })
      .catch((error) => { reject(error) })
    })
  }
}

module.exports = CommitmentCreator
