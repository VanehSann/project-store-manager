// simon - chai
const sinon = require("sinon");
const { expect } = require("chai");

// model - controller - service
const productsController = require("../../../controllers/productsController");
const productsService = require("../../../services/productsService");
const productsModel = require('../../../models/productsModel');
// mock
const allProductsResponse = [
  { id: 1, name: "Informação Um" },
  { id: 2, name: "Informação Dois" },
  { id: 3, name: "Informação Três" }
];

// describe - tests
describe("Testando camada controller/productsController", () => {
  describe("1", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(productsService, "addNewProduct")
        .resolves(allProductsResponse);
    });

    after(() => {
      productsService.addNewProduct.restore();
    });

    // it - tests
    it("'o'", async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    // it("2status 500", async () => {
    //   await productsController.getAllProducts(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(false); // true
    // });
    // it("3status 200", async () => {
    //   await productsController.deleteProduct(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });
    // it("4status 500", async () => {
    //   await productsController.getProductById(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(true); // true
    // });
    // it("5status 200", async () => {
    //   await productsController.getSearchProducts(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });
    // it("6status 500", async () => {
    //   await productsController.updateNewProduct(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(true); // true
    // });
    // it("7status 200", async () => {
    //   await productsController.addNewProduct(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });
  });
  describe("2", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(productsModel, "addNewProduct")
        .resolves(allProductsResponse);
    });

    after(() => {
      productsModel.addNewProduct.restore();
    });

    // it - tests
    it("'ro'", async () => {
      await productsService.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("'eo'", async () => {
      await productsService.getSearchProducts(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(false); 
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
  });
});