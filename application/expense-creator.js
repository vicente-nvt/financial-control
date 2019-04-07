const Expense = require('../domain/expense')
const ApplicationException = require('./application-exception')

class ExpenseCreator {
	constructor(expenseRepository) {
		this.expenseRepository = expenseRepository
	}

	addExpense(newExpense) {
		return new Promise((resolve, reject) => {

			let expense
			try {
				expense = new Expense(
					newExpense.description,
					newExpense.value,
					newExpense.dueDate,
				)
			} catch (error) {
				reject(new ApplicationException(error.message))
			}

			this.expenseRepository.addExpense(expense)
				.then(expenseCreated => resolve({ id: expenseCreated._id }))
				.catch(error => reject(error))
		})
	}
}

module.exports = ExpenseCreator
