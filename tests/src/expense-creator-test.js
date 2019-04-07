const ExpenseCreator = require('../../application/expense-creator')
const ExpenseBuilder = require('../helpers/expense-builder')

describe('Expense creator tests', () => {
	it('addExpense method should call repository passing an Expense', () => {
		const description = 'A new expense'
		const expectedValue = 1000
		const dueDate = '2018-10-01'
		var expectedExpense = ExpenseBuilder.new()
			.withDescription(description)
			.withValue(expectedValue)
			.withDueDate(dueDate)
			.build()
		var expense = {
			description: description,
			value: expectedValue,
			dueDate: dueDate,
		}
		const promisedExpense = { _id: 1 }
		let expenseRepository = jasmine.createSpyObj('ExpenseRepository', ['addExpense'])
		expenseRepository.addExpense.and.returnValue(Promise.resolve(promisedExpense))
		let expenseCreator = new ExpenseCreator(expenseRepository)

		expenseCreator.addExpense(expense)

		expect(expenseRepository.addExpense).toHaveBeenCalledWith(expectedExpense)
	})
})