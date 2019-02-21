var Commitment = require('../domain/commitment')

class CommitmentCreator {
  constructor(commitmentRepository) {
    this.commitmentRepository = commitmentRepository;
  }

  addCommitment(newCommitment) {
    return new Promise((resolve, reject) => {

      let commitment
      try {
        commitment = new Commitment(
          newCommitment.description,
          newCommitment.expectedValue,
          newCommitment.expiryDate,
          newCommitment.movementIndicator,
          newCommitment.plotNumber,
          newCommitment.totalOfPlots
        )
      } catch (error) {
        resolve(error)
      }

      this.commitmentRepository.addCommitment(commitment)
      .then((commitmentCreated) => { resolve({ id: commitmentCreated._id}) })
      .catch((error) => { reject(error) })
    })
  }
}

module.exports = CommitmentCreator
