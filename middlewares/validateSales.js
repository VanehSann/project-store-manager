const validateSales = (request, response, next) => {
  const { productId, quantity } = request.body;
  if (!productId) {
    return response.status(400).json({ message: '"productId" is required' });
  }
  if (productId === undefined) {
    return response.status(400).json({ message: 'Product not found' });
  }
  if (!quantity) {
    return response.status(400).json({ message: '"quantity" is required' });
  }
  if (quantity <= 0) {
    return response.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = validateSales;