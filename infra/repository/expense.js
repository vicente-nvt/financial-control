class ExpenseRepository {

	constructor(databaseConnection) {
		let expenseSchema = databaseConnection.Schema({
			description: { type: String, required: true },
			value: { type: Number, required: true },
			dueDate: { type: Date, required: true },
			payments: { type: Array }
		})

		this.Expense = databaseConnection.model('Expense', expenseSchema)
	}

	addExpense(expense) {
		let expenseCreated = new this.Expense({
			description: expense.description,
			value: expense.value,
			dueDate: expense.dueDate,
			payments: []
		})

		return expenseCreated.save()
	}
}

module.exports = ExpenseRepository