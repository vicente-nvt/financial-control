var Payment = require('../../domain/payment')

describe('Payment creation', () => {
	let paymentValue = 50

	it('Should create a payment with the payment value', () => {
		let payment = new Payment(paymentValue)

		expect(payment.value).toEqual(paymentValue)
	})

	it('Should create a payment with the payment date', () => {
		let paymentDate = new Date()

		let payment = new Payment(paymentValue)

		expect(payment.date).toEqual(paymentDate)
	})

	it('Should not be possible to create a payment without value', () => {
		let act = () => new Payment()

		expect(act).toThrow(new Error('It is not possible to create a payment without the value'))
	})
})