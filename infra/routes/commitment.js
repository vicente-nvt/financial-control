var CommitmentController = require('../../controllers/commitment')

module.exports = (application) => {
  var commitmentController = new CommitmentController(application.database)

  application.post('/commitments', (req, res) => {
    commitmentController.addCommitment(req, res)
  })
}
