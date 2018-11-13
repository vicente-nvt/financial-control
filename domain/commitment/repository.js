class CommitmentRepository{

    constructor(dbConnection){
        this.dbConnection = dbConnection;
    }

    getCommitments(callback) {
        this.dbConnection.getAll("commitment", callback);
    }

    addCommitment(commitment, callback) {
        this.dbConnection.add("commitment", commitment, callback);
    }
}

module.exports = CommitmentRepository;