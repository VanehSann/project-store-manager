const productsService = require('../services/productsService');

const productsController = {
 
  addNewSales: async (request, response) => {
    try {
      const { productId, quantity } = request.body;
      const product = await productsService.addNewSales(productId, quantity);
      response.status(201).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

};

module.exports = productsController;