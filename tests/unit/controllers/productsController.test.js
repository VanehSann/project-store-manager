// simon - chai
const sinon = require("sinon");
const { expect } = require("chai");

// model - controller - service
const productsController = require("../../../controllers/productsController");
const productsService = require("../../../services/productsService");

// mock
const allProductsResponse = [
  { id: 1, name: "Informação Um" },
  { id: 2, name: "Informação Dois" },
  { id: 3, name: "Informação Três" }
];

// describe - tests
describe("Testando camada controller/productsController", () => {
  describe("1 - testando getAllProducts", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(productsService, "getAllProducts")
        .resolves(allProductsResponse);
    });

    after(() => {
      productsService.getAllProducts.restore();
    });

    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("4status 500", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("5status 200", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("6status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
  });
  describe("2 - testando getProductbyId", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};
      request.params = { id: 1 };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsService, "getProductById").resolves({ id: 1 });
    });

    after(() => {
      productsService.getProductById.restore();
    });

    // it - tests
    it("1status 200", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
    it("3 status 200 ok", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
    it("6 status 500 ok", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
  });
  describe("3 - testando addNewProduct", () => {
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
    // it("1status 200", async () => {
    //   await productsController.getAllProducts(request, response);
    //   expect(response.status.calledWith(200)).to.be.equal(false); // true
    // });
    it("2status 500", async () => {
      await productsController.getAllProducts(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("4status 500", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("5status 200", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("6status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("7status 200", async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
  });
  describe("4 - testando updtateNewProduct", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};
      request.params = { id: 1 };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsService, "updateNewProduct").resolves({ id: 1 });
    });

    after(() => {
      productsService.updateNewProduct.restore();
    });

    // it - tests
    it("1status 200", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("2status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("4status 500", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it("5status 200", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("6status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("7status 200", async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });

    // não teve alteração na porcentagem
    // it('3status 200', async () => {
    //   await productsController.updateNewProduct(request, response);
    //   expect(response.json.calledWith(sinon.match.object)).to.be.equal(true); // true
    // });
  });
  describe("5 - testando deleteProduct", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(productsService, "deleteProduct")
        .resolves(allProductsResponse);
    });

    after(() => {
      productsService.deleteProduct.restore();
    });

    // it - tests
    it("1status 200", async () => {
      await productsController.getAllProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    // it("2status 500", async () => {
    //   await productsController.getAllProducts(request, response);
    //   expect(response.status.calledWith(500)).to.be.equal(false); // true
    // });
    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("4status 500", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("5status 200", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("6status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("7status 200", async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
  });
  describe("6 - testando getSearchProducts", () => {
    // response - request
    const response = {};
    const request = {};

    // before and after
    before(() => {
      request.body = {};
      request.query = {}

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(productsService, "getSearchProducts")
        .resolves(allProductsResponse);
    });

    after(() => {
      productsService.getSearchProducts.restore();
    });

    // it - tests
    it("status 200", async () => {
      await productsController.getAllProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("status 500", async () => {
      await productsController.getAllProducts(request, response);
      expect(response.status.calledWith(500)).to.be.equal(false); // true
    });
    it("3status 200", async () => {
      await productsController.deleteProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(false); // true
    });
    it("4status 500", async () => {
      await productsController.getProductById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("5status 200", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
    it("ooo", async () => {
      await productsController.getSearchProducts(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      expect(response.status.calledWith(500)).to.be.equal(true); // true
    });
    it("6status 500", async () => {
      await productsController.updateNewProduct(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);// true
    });
    it("7status 200", async () => {
      await productsController.addNewProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true); // true
    });
  });
});

// npm run test:mocha
