const ExpenseCreator = require('../application/expense-creator')
const ExpenseRepository = require('../infra/repository/expense')
const ApplicationException = require('../application/application-exception')

class ExpenseController {
	constructor(databaseConnection) {
		let expenseRepository = new ExpenseRepository(databaseConnection)
		this.expenseCreator = new ExpenseCreator(expenseRepository)
	}

	addExpense(request, response) {
		let expenseDto = request.body
		this.expenseCreator.addExpense(expenseDto)
			.then(result => response.status(201).send(result))
			.catch((error) => {
				if (error instanceof ApplicationException) {
					response.status(400).send(error.message)
					return
				}

				response.status(500).send(error)
			})
	}
}

module.exports = ExpenseController
