const ExpenseBuilder = require('../helpers/expense-builder')
const ExpensePayer = require('../../application/expense-payer')

describe('Expense payer', () => {
	const expenseId = '5ca9fac325537c45257f56aa'
	const paymentValue = 10.50
	let expense 
	let expensePayer
	let expenseRepository

	beforeEach(() => {
		expense = ExpenseBuilder.new().build()
		expenseRepository = jasmine.createSpyObj('ExpenseRepository', ['update', 'findById'])
		expenseRepository.findById.and.returnValue(Promise.resolve(expense))
		expenseRepository.update.and.returnValue(Promise.resolve())
		expensePayer = new ExpensePayer(expenseRepository)
	})

	it('should retrieve the expense from repository', () => {
		expensePayer.payExpense(expenseId, paymentValue)

		expect(expenseRepository.findById).toHaveBeenCalledWith(expenseId)
	})

	it('should add a payment to expense', () => {
		let promise = expensePayer.payExpense(expenseId, paymentValue)

		promise.then(() => {
			expect(paymentValue).toEqual(expense.paidValue)
		})
	})

	it('should update the expense to repository', () => {
		let promise = expensePayer.payExpense(expenseId, paymentValue)

		promise.then(() => {
			expect(expenseRepository.update).toHaveBeenCalledWith(expenseId, expense)
		})
	})
})