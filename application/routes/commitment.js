var CommitmentRepository = require("../../domain/commitment/repository");
var DatabaseConnection = require("../../config/dbConnection");

module.exports = (application) => {

    var dbConnection = new DatabaseConnection();
    var commitmentRepository = new CommitmentRepository(dbConnection);

    application.get("/commitments", (_, res) => {
        commitmentRepository.getCommitments(sendDataBack(res));
    });

    application.post("/commitment", (req, res) => {
        var commitment = req.body.commitment;
        commitmentRepository.addCommitment(commitment, () => {res.sendStatus(200)});
    });
};

function sendDataBack(res) {
    return (data) => { res.send(data); };
}
