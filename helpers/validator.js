function validate (condition, message) {
  if (condition) throw new Error(message)
}

module.exports = {
  validate: validate
}
