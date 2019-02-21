class CommitmentRepository {

    constructor(databaseConnection) {

        let commitmentSchema = databaseConnection.Schema({
            description: { type: String, required: true },
            expectedValue: { type: Number, required: true },
            effectiveValue: { type: Number, required: true },
            expiryDate: { type: Date, required: true },
            movementIndicator: { type: Number, required: true },
            plotNumber: { type: Number, required: true },
            totalOfPlots: { type: Number, required: true }
        });

        this.Commitment = databaseConnection.model('Commitment', commitmentSchema);
    }

    addCommitment(commitment) {

        let commitmentCreated = new this.Commitment({
            description: commitment.description,
            expectedValue: commitment.expectedValue,
            effectiveValue: commitment.effectiveValue,
            expiryDate: commitment.expiryDate,
            movementIndicator: commitment.movementIndicator,
            plotNumber: commitment.plotNumber,
            totalOfPlots: commitment.totalOfPlots
        })

        return commitmentCreated.save();
    }
}

module.exports = CommitmentRepository;