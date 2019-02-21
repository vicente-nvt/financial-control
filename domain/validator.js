function validate(condition, message) {
  if (condition) throw new Error(message)
}

function isNullOrUndefined(value) {
  return value == undefined || value == null
}

module.exports = {
  validate: validate,
  isNullOrUndefined: isNullOrUndefined
}
