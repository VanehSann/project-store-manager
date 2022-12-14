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
  addNewProduct: async (name) => {
    const product = await productsModel.addNewProduct(name);
    return product;
  },
  updateNewProduct: async (id, name) => {
    const product = await productsModel.updateNewProduct(id, name);
    return product;
  },
  deleteProduct: async (id) => {
    const product = await productsModel.deleteProduct(id);
    return product;
  },
  getSearchProducts: async (q) => {
    const products = await productsModel.getSearchProducts(q);
    return products;
  },
};

module.exports = productsService;