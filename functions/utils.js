const reqValidator = (newEvent) => {
  const { date, begin, end, cdate, email, name, phone, massage } = newEvent
  if (!date, !begin, !end, !cdate, !email, !name, !phone, !massage) {
    return false
  }
  return true
}

module.exports = {
  reqValidator
}