const validateNewProductName = (request, response, next) => {
  const name = request.body;
  if (!name) {
    return response.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 5) {
    return response.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  next();
};

module.exports = validateNewProductName;