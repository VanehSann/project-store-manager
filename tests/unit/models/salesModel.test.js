// simon - chai
const sinon = require("sinon");
const { expect } = require("chai");

// model - controller - service
const connection = require("../../../models/connection");
const salesModel = require("../../../models/salesModel");

// mock
const allSalesResponse = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    SaleId: 1,
    quantity: 2
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    SaleId: 2,
    quantity: 2
  }
];

describe('Testando models/salesModel', () => {

  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  // cobre linha 18 do salesModel
  describe('', async () => {
    it.skip('testa addNewSale', async () => {
      const response = await salesModel.addNewSale(1, 1, 5);
      expect(response).to.have.all.keys('id', 'name');
    });
  });
  //
  // describe('', async () => {
  //   it('testa getSearchsales', async () => {
  //     const response = await salesModel.getSearchsales(allSalesResponse.name);
  //     console.log(response)
  //     expect(typeof response).to.be.equal('object');
  //   });
  //   it('testa getSearchsales', async () => {
  //     const response = await salesModel.getSearchsales();
  //     console.log(response, '0')
  //     expect(typeof response).to.be.equal('object');
  //   });
  // });
});
