// simon - chai
const sinon = require("sinon");
const { expect } = require("chai");

// model - controller - service
const connection = require("../../../models/connection");
const productsModel = require("../../../models/productsModel");

// mock
const allProductsResponse = {
  name: 'Nome'
};

describe('Testando models/productsModel', () => {

  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  // cobre linha 18 do productsModel
  describe('', async () => {
    it('testa addNewProduct', async () => {
      const response = await productsModel.addNewProduct(allProductsResponse.name);
      expect(response).to.have.all.keys('id', 'name');
    });
  });
  //
  describe('', async () => {
    it('testa getSearchProducts', async () => {
      const response = await productsModel.getSearchProducts(allProductsResponse.name);
      console.log(response)
      expect(typeof response).to.be.equal('object');
    });
  });
});
