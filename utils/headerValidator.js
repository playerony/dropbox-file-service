var generateFailureResponse = function(error) {
  return {
      status: 500, 
      error: error, 
      response: null
    }
}

exports.authChecker = (req, res, next) => {
  if (!req.headers.appauthheader || req.headers.appauthheader !== 'MOTORCYCLE-CLUB-API-AUTH-HEADER') {
    res.json(generateFailureResponse('Access denied.'));
  } else {
    next();
  }
}