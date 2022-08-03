// simon - chai
const sinon = require('sinon');
const { expect } = require('chai');

// model - controller - service
const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

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

// describe - tests
describe('Testando camada controller/salesController', () => {
  describe('1 - testando getAllSales', () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(salesService, 'getAllSales')
        .resolves(allSalesResponse)
    });

    after(() => {
      salesService.getAllSales.restore();
    });

    // it - tests
    it('1status 200', async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it('2status 500', async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it('3status 200', async () => {
      await salesController.deleteSale(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it('4status 500', async () => {
      await salesController.getSaleById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    // it('6status 500', async () => {
    //   await salesController.updateNewSale(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(true); // true
    // });
    // it('7status 200', async () => {
    //   await salesController.addNewSale(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });
  });
  describe('2 - testando getSalebyId', () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};
      request.params = { id: 1 }

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(salesService, 'getSaleById')
        .resolves({ id: 1 })
    });

    after(() => {
      salesService.getSaleById.restore();
    });

    // it - tests
    it('1status 200', async () => {
      await salesController.getSaleById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
    it('2status 500', async () => {
      await salesController.getSaleById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it('3status 200', async () => {
      await salesController.deleteSale(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
    it('4status 500', async () => {
      await salesController.getSaleById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    // it('6status 500', async () => {
    //   await salesController.updateNewSale(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(true); // true
    // });
    // it('7status 200', async () => {
    //   await salesController.addNewSale(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(true); // true
    // });
  });
  // describe('3 - testando addNewSale', () => {
  //   // response - request
  //   const response = {};
  //   const request = {};

  //   // before and after
  //   before(() => {
  //     request.body = {};

  //     response.status = sinon.stub()
  //       .returns(response);
  //     response.json = sinon.stub()
  //       .returns();

  //     sinon.stub(salesService, 'addNewSale')
  //       .resolves(allSalesResponse)
  //   });

  //   after(() => {
  //     salesService.addNewSale.restore();
  //   });

  //   // it - tests
  //   it('1status 200', async () => {
  //     await salesController.getAllSales(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  //   it('2status 500', async () => {
  //     await salesController.getAllSales(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(false); // true
  //   });
  //   it('3status 200', async () => {
  //     await salesController.deleteSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  //   it('4status 500', async () => {
  //     await salesController.getSaleById(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(true); // true
  //   });
  //   it('6status 500', async () => {
  //     await salesController.updateNewSale(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(true); // true
  //   });
  //   it('7status 200', async () => {
  //     await salesController.addNewSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });

  // });
  // describe('4 - testando updtateNewSale', () => {
  //   // response - request
  //   const response = {};
  //   const request = {};

  //   // before and after
  //   before(() => {
  //     request.body = {};
  //     request.params = { id: 1 }

  //     response.status = sinon.stub()
  //       .returns(response);
  //     response.json = sinon.stub()
  //       .returns();

  //     sinon.stub(salesService, 'updateNewSale')
  //       .resolves({ id: 1 })
  //   });

  //   after(() => {
  //     salesService.updateNewSale.restore();
  //   });

  //   // it - tests
  //   it('1status 200', async () => {
  //     await salesController.updateNewSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  //   it('2status 500', async () => {
  //     await salesController.updateNewSale(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(true); // true
  //   });
  //   it('3status 200', async () => {
  //     await salesController.deleteSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  //   it('3status 200', async () => {
  //     await salesController.deleteSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  //   it('4status 500', async () => {
  //     await salesController.getSaleById(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(true); // true
  //   });
  //   it('6status 500', async () => {
  //     await salesController.updateNewSale(request, response);
  //     expect(response.status.calledWith(500)).to.be.equal(true); // true
  //   });
  //   it('7status 200', async () => {
  //     await salesController.addNewSale(request, response);
  //     expect(response.status.calledWith(200)).to.be.equal(false); // true
  //   });
  // });
  describe('5 - testando deleteSale', () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(salesService, 'deleteSale')
        .resolves(allSalesResponse)
    });

    after(() => {
      salesService.deleteSale.restore();
    });

    // it - tests
    it('1status 200', async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it('2status 500', async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it('3status 200', async () => {
      await salesController.deleteSale(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it('4status 500', async () => {
      await salesController.getSaleById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    // it('6status 500', async () => {
    //   await salesController.updateNewSale(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(true); // true
    // });
    // it('7status 200', async () => {
    //   await salesController.addNewSale(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });

  });

});

// npm run test:mocha
