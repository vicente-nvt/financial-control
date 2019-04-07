var { validate, isNullOrUndefined } = require('./validator');
var Payment = require('./payment')

class Expense {
	constructor(description, value, dueDate) {
		this.validateEntryData(description, value, dueDate)

		this.description = description
		this.value = value
		this.dueDate = dueDate
		this.payments = []
	}

	validateEntryData(description, value, dueDate) {
		validate(isNullOrUndefined(description) || description.trim() === '',
			'It is not possible to create an expense without a valid description')
		validate(isNullOrUndefined(value) || value <= 0,
			'It is not possible to create an expense without a valid value')
		validate(isNullOrUndefined(dueDate),
			'It is not possible to create an expense without a valid due date')
	}

	pay(paymentValue) {
		validate(paymentValue > this.value,
			'It is not possible to add a payment greater than the effective value')

		let payment = new Payment(paymentValue)
		this.payments.push(payment)
	}

	get paidValue() {
		return this.payments.reduce((totalPaid, payment) => { return totalPaid + payment.value }, 0)
	}

	get hasPayments() {
		return this.payments.length > 0
	}
}

module.exports = Expense