var CommitmentCreator = require('../application/commitment-creator')
var CommitmentRepository = require('../infra/data-access/commitment-repository')

class CommitmentController {
  constructor(databaseConnection) {
    let commitmentRepository = new CommitmentRepository(databaseConnection);
    this.commitmentCreator = new CommitmentCreator(commitmentRepository);
  }

  addCommitment(request, response) {
    var commitmentDto = request.body
    this.commitmentCreator.addCommitment(commitmentDto)
      .then((result) => {
        if (result instanceof Error)
          response.sendStatus(400);
        else
          response.status(201).send(result);
      })
      .catch((error) => {
        response.status(500).send(error)
      })
  }
}

module.exports = CommitmentController
