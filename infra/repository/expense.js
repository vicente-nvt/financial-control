const Expense = require('../../domain/expense')

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

	findById(id) {
		return new Promise((resolve, reject) => {
			this.Expense.findById(id)
				.then((foundExpense) => {
					let expense = new Expense(
						foundExpense.description,
						foundExpense.value,
						foundExpense.dueDate
					)

					expense.payments = foundExpense.payments
					resolve(expense)
				})
				.catch(error => reject(error))
		})
	}

	update(id, expense) {
		return this.Expense.findByIdAndUpdate(id, expense)
	}
}

module.exports = ExpenseRepository