var CommitmentController = require('../../controllers/commitment')

module.exports = application => {
  var commitmentController = new CommitmentController()

  application.get('/commitments', (req, res) => {
    commitmentController.getCommitments(req, res)
  })

  application.get('/commitment/:commitmentId', (req, res) => {
    commitmentController.getCommitment(req, res)
  })

  application.post('/commitments', (req, res) => {
    commitmentController.addCommitment(req, res)
  })
}
