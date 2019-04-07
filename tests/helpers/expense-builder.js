const Expense = require('../../domain/expense')

class ExpenseBuilder {
	constructor() {
		this.description = 'A new expense'
		this.value = 1000.0
		this.dueDate = new Date(2018, 1, 30)
	}

	static new() {
		return new ExpenseBuilder()
	}

	withDescription(description) {
		this.description = description
		return this
	}

	withValue(value) {
		this.value = value
		return this
	}

	withDueDate(dueDate) {
		this.dueDate = dueDate
		return this
	}

	build() {
		return new Expense(
			this.description,
			this.value,
			this.dueDate
		)
	}
}

module.exports = ExpenseBuilder
