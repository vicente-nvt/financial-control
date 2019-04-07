const ExceptionDomain = require('./domain-exception')

function validate(condition, message) {
	if (condition)
		throw new ExceptionDomain(message)
}

function isNullOrUndefined(value) {
	return value == undefined || value == null
}

module.exports = {
	validate: validate,
	isNullOrUndefined: isNullOrUndefined
}
