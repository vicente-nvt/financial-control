const ExpenseController = require('../../controllers/expense')

module.exports = (application) => {
	let expenseController = new ExpenseController(application.database)

	application.post('/expenses/', (req, res) => {
		expenseController.addExpense(req, res)
	})
}
