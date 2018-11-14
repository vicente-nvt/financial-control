var CommitmentRepository = require("../domain/commitment/repository");
var DatabaseConnection = require("../config/dbConnection");

class CommitmentController{

    constructor() {
        var dbConnection = new DatabaseConnection();
        this.commitmentRepository = new CommitmentRepository(dbConnection);
    }

    getCommitments(callback) {
        this.commitmentRepository.getCommitments(callback);
    }

    addCommitment(bodyData, callback){
        var dataCommitment = bodyData.commitment;
        this.commitmentRepository.addCommitment(dataCommitment, callback);
    }
}

module.exports = CommitmentController;