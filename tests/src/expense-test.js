const ExpenseBuilder = require('../helpers/expense-builder')
const Payment = require('../../domain/payment')

describe('Expense creation', () => {
	it('should create a expense with a description', () => {
		let expectedDescription = 'Car rent'

		let expense = ExpenseBuilder.new()
			.withDescription(expectedDescription)
			.build()

		expect(expectedDescription).toEqual(expense.description)
	})

	it('should not create a expense without description', () => {
		const expectedMessage = 'It is not possible to create an expense without a valid description'
		let testCases = ['', ' ', null]

		testCases.forEach(description => {
			let act = () =>
				ExpenseBuilder.new()
					.withDescription(description)
					.build()

			expect(act).toThrow(new Error(expectedMessage))
		})
	})

	it('should create a expense with value', () => {
		let expectedValue = 599.99

		let expense = ExpenseBuilder.new()
			.withValue(expectedValue)
			.build()

		expect(expectedValue).toEqual(expense.value)
	})

	it('should not create a expense without a defined value', () => {
		let expectedMessage = 'It is not possible to create an expense without a valid value'
		let testCases = [undefined, null, 0, -10]

		testCases.forEach(expectedValue => {
			let act = () =>
				ExpenseBuilder.new()
					.withValue(expectedValue)
					.build()

			expect(act).toThrow(new Error(expectedMessage))
		})
	})

	it('should create a expense with due date', () => {
		let expectedDueDate = new Date(2018, 12, 31)

		let expense = ExpenseBuilder.new()
			.withDueDate(expectedDueDate)
			.build()

		expect(expectedDueDate).toEqual(expense.dueDate)
	})

	it('should not create a expense without a valid due date ', () => {
		let expectedMessage = 'It is not possible to create an expense without a valid due date'
		let testCases = [undefined, null]

		testCases.forEach(dueDate => {
			let act = () =>
				ExpenseBuilder.new()
					.withDueDate(dueDate)
					.build()

			expect(act).toThrow(new Error(expectedMessage))
		})
	})

	it('should create a expense with an empty array of payments', () => {
		let expense = ExpenseBuilder.new().build()

		expect(expense.payments).toBeDefined()
	})

	it('should create a expense without payments', () => {
		let expense = ExpenseBuilder.new().build()

		expect(expense.hasPayments).toBe(false)
	})
})

describe('Expense payment', () => {
	it('should be possible to add a payment', () => {
		let expectedValue = 100.0
		let paymentValue = 50.0
		let expense = ExpenseBuilder.new().withValue(expectedValue).build()
		let payment = new Payment(paymentValue)

		expense.pay(paymentValue)

		expect(expense.payments[0]).toEqual(payment)
	})

	it('should not be possible to add a payment greater than the expense value', () => {
		let expectedValue = 100.0
		let paymentValue = 150.0
		let expense = ExpenseBuilder.new().withValue(expectedValue).build()

		let act = () => { expense.pay(paymentValue) }

		expect(act).toThrow(new Error('It is not possible to add a payment greater than the effective value'))
	})
})