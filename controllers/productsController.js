const productsService = require('../services/productsService');

const productsController = {

  getAllProducts: async (_request, response) => {
    
      const products = await productsService.getAllProducts();
      response.json(products);
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
  updateNewProduct: async (request, response) => {
    try {
      const id = Number(request.params.id);
      const { name } = request.body;
      const product = await productsService.getProductById(id);
      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }
      const updatedProduct = await productsService.updateNewProduct(id, name);
      response.status(200).json(updatedProduct);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }, 
  deleteProduct: async (request, response) => {
    try {
      const id = Number(request.params.id);
      const product = await productsService.getProductById(id);
      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }
      const deleteProduct = await productsService.deleteProduct(id);
      response.status(204).json(deleteProduct);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }, 
  getSearchProducts: async (request, response) => {
    try {
      const { q } = request.query;
      const products = await productsService.getSearchProducts(q);
      response.status(200).json(products);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = productsController;
