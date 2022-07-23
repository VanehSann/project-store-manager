const productsModel = require('../models/productsModel');

const productsService = {

  getAllProducts: async () => {
    const products = await productsModel.getAllProducts();
    return products;
  },
  getProductById: async (id) => {
    const product = await productsModel.getProductById(id);
    return product;
  },

};

module.exports = productsService;