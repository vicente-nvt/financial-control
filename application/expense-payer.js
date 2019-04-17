const ApplicationException = require('./application-exception')

class ExpensePayer {

	constructor(expenseRepository) {
		this.expenseRepository = expenseRepository
	}

	payExpense(expenseId, value) {
		return new Promise(async (resolve, reject) => {
			let expense
			await this.expenseRepository.findById(expenseId)
				.then(foundExpense => expense = foundExpense)
				.catch(error => reject(error.message))

			try {
				expense.pay(value)
			} catch (error) {
				reject(new ApplicationException(error.message))
				return
			}

			this.expenseRepository.update(expenseId, expense)
				.then(() => resolve())
				.catch(error => reject(error.message))
		})
	}
}

module.exports = ExpensePayer