const DomainException = require('./domain-exception')

function validate(condition, message) {
	if (condition)
		throw new DomainException(message)
}

function isNullOrUndefined(value) {
	return value == undefined || value == null
}

module.exports = {
	validate: validate,
	isNullOrUndefined: isNullOrUndefined
}
