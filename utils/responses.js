exports.success = function(message) {
  return {
    status: 200,
    response: message,
    error: null
  }
}

exports.failure = function(message) {
  return {
    status: 400,
    response: null,
    error: message,
  }
}