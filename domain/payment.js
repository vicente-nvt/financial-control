var { validate, isNullOrUndefined } = require('./validator')

class Payment {
    constructor(paymentValue) {

        validate(isNullOrUndefined(paymentValue), 'It is not possible to create a payment without the value')

        this.value = paymentValue;
        this.date = new Date();
    }
}

module.exports = Payment