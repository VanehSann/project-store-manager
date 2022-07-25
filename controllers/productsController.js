const productsService = require('../services/productsService');

const productsController = {

  getAllProducts: async (_request, response) => {
    try {
      const products = await productsService.getAllProducts();
      response.json(products);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getProductById: async (request, response) => {
    try {
      const id = Number(request.params.id);
      const product = await productsService.getProductById(id);
      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }
      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  addNewProduct: async (request, response) => {
    try {
      const { name } = request.body;
      const product = await productsService.addNewProduct(name);
      response.status(201).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

};

module.exports = productsController;