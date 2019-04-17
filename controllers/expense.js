const ApplicationException = require('../application/application-exception')
const ExpenseRepository = require('../infra/repository/expense')
const ExpenseCreator = require('../application/expense-creator')
const ExpensePayer = require('../application/expense-payer')

class ExpenseController {
	constructor(databaseConnection) {
		let expenseRepository = new ExpenseRepository(databaseConnection)
		this.expenseCreator = new ExpenseCreator(expenseRepository)
		this.expensePayer = new ExpensePayer(expenseRepository)
	}

	addExpense(request, response) {
		let expenseDto = request.body
		this.expenseCreator.addExpense(expenseDto)
			.then(result => response.status(201).send(result))
			.catch(error => this.processErrorProperly(error, response))
	}

	addPayment(request, response) {
		let paymentValue = request.body.value
		let expenseId = request.params.id
		this.expensePayer.payExpense(expenseId, paymentValue)
			.then(() => response.sendStatus(201))
			.catch(error => this.processErrorProperly(error, response))
	}

	processErrorProperly(error, response) {
		if (error instanceof ApplicationException) {
			response.status(400).send(error.message)
			return
		}
		response.status(500).send(error)
	}
}

module.exports = ExpenseController
