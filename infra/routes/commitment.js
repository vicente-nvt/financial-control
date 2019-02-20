var CommitmentController = require('../../controllers/commitment')

module.exports = (application) => {
  var commitmentController = new CommitmentController(application.get('databaseConnection'))

  application.post('/commitments', (req, res) => {
    commitmentController.addCommitment(req, res)
  })
}
