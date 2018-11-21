var CommitmentRepository = require("../domain/commitment/repository");
var DatabaseConnection = require("../infra/config/dbConnection");

class CommitmentManager {

    constructor(){
        this.databaseConnection = new DatabaseConnection();
        this.commitmentRepository = new CommitmentRepository(this.databaseConnection);
    }

    getCommitments(callback) {
        this.commitmentRepository.getCommitments(callback);
    }

    addCommitment(commitment, callback) {
        this.commitmentRepository.addCommitment(commitment, callback);
    }
}

module.exports = CommitmentManager;