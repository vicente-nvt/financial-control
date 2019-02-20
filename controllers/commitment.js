var CommitmentCreator = require('../application/commitment-creator')
var CommitmentRepository = require('../infra/database/commitment-repository')

class CommitmentController {
  constructor(databaseConnection) {
    let commitmentRepository = new CommitmentRepository(databaseConnection);
    this.commitmentCreator = new CommitmentCreator(commitmentRepository);
  }

  addCommitment(request, response) {
    var commitmentDto = request.body
    this.commitmentCreator.addCommitment(commitmentDto)
      .then((exception) => {
        if (exception)
          response.sendStatus(400);
        else
          response.sendStatus(201)
      })
      .catch((error) => {
        response.status(500).send(error)
      })
  }
}

module.exports = CommitmentController
