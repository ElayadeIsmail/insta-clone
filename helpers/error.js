class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (error, res) => {
  console.log(error.message);
  if (error.kind == 'ObjectId') {
    return res.status(400).json({ msg: 'Profile Not Found' });
  }
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message = 'Server Error';
  }
  const { statusCode, message } = error;
  res.status(statusCode).json({ errors: [{ message }] });
};

module.exports = {
  ErrorHandler,
  handleError,
};
