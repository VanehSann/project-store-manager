const validateSales = (request, response, next) => {
  const { productId, quantity } = request.body;
  if (!quantity || quantity.length === 0) {
    // req06 - deveria dar erro aqui?
    return response.status(400).json({ message: '"quantity" is required' });
  }
  if (!productId || productId.length === 0) {
    return response.status(400).json({ message: '"productId" is required' });
  }
  if (productId === null) {
    // req06 - deveria dar erro aqui?
    return response.status(400).json({ message: 'Product not found' });
  }
  if (quantity <= 0) {
    return response.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = validateSales;