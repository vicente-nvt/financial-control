var CommitmentController = require("../../controllers/commitment");

module.exports = (application) => {

    var commitmentController = new CommitmentController();

    application.get("/commitments", (req, res) => {
        commitmentController.getCommitments(req, res);
    });

    application.post("/commitment", (req, res) => {
        commitmentController.addCommitment(req, res);
    });
};