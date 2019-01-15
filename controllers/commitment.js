var CommitmentManager = require("../application/commitment-manager");

class CommitmentController{

    constructor(){
        this.commitmentManager = new CommitmentManager();
    }

    getCommitments(_request, response) {
        this.commitmentManager.getCommitments()
        .then((commitments) => {
            response.send(commitments);
        })
        .catch((error) => {
            this.handleError(response, error);
        });
    }

    getCommitment(request, response) {
        this.commitmentManager.getCommitment(request.params.commitmentId)
        .then((commitments) => {
            response.send(commitments);
        })
        .catch((error) => {
            this.handleError(response, error);
        });
    }

    addCommitment(request, response) {
        var commitmentDto = request.body.commitment;
        this.commitmentManager.addCommitment(commitmentDto)
        .then((error) => {
            if (error) 
                this.handleError(response, error)
            else
                response.sendStatus(200);
        })
        .catch(error => {
            this.handleError(response, error);
        });
    }

    handleError(response, error) {
        response.status(500).send(error);
    }
}

module.exports = CommitmentController;