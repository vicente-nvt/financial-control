var CommitmentController = require("../../controllers/commitment");

module.exports = (application) => {

    var commitmentController = new CommitmentController();

    application.get("/commitments", (_, res) => {
        commitmentController.getCommitments(sendDataBack(res));
    });

    application.post("/commitment", (req, res) => {
        commitmentController.addCommitment(req.body, (result) => {res.send(result)});
    });
};

function sendDataBack(res) {
    return (data) => { res.send(data); };
}
