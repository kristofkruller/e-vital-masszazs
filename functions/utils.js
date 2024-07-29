const reqValidator = (newEvent) => {
  if (!newEvent.begin || !newEvent.end || !newEvent.massage || !newEvent.email || !newEvent.phone) {
    return false
  }
  return true
}


module.exports = {
  reqValidator
}