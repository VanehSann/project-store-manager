const salesModel = require('../models/salesModel');

const salesService = {

  getAllSales: async () => {
    const sales = await salesModel.getAllSales();
    return sales;
  },
  getSaleById: async (id) => {
    const sale = await salesModel.getSaleById(id);
    return sale;
  },
  addNewSale: async (productId, quantity) => {
    const sale = await salesModel.addNewSale(productId, quantity);
    return sale;
  },

};

module.exports = salesService;