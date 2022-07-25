const salesService = require('../services/salesService');

const salesController = {
 
  getAllSales: async (_request, response) => {
    try {
      const sales = await salesService.getAllSales();
      response.json(sales);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  getSaleById: async (request, response) => {
    try {
      const id = Number(request.params.id);
      const sale = await salesService.getSaleById(id);
      if (!sale || sale.length === 0) {
        return response.status(404).json({ message: 'Sale not found' });
      }
      response.status(200).json(sale);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  addNewSale: async (request, response) => {
    // req06 - o que exatamente é pra fazer?
    try {
      const { productId, quantity } = request.body;
      const sale = await salesService.addNewSale(productId, quantity);
      response.status(201).json(sale);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

};

module.exports = salesController;