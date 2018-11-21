var CommitmentManager = require("../application/commitment-manager");

class CommitmentController{

    constructor(){
        this.commitmentManager = new CommitmentManager();
    }

    getCommitments(req, res) {
        this.commitmentManager.getCommitments((commitments) => {
            res.send(commitments);
        });
    }

    addCommitment(req, res){
        var commitmentDto = req.body.commitment;
        this.commitmentManager.addCommitment(commitmentDto, (error) => {
            if (!error) 
                res.send(error);
            else
                res.sendStatus(200);
        });
    }
}

module.exports = CommitmentController;