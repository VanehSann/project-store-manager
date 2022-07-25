const { Router } = require('express');

const productsController = require('../controllers/productsController');

const validateNewProductName = require('../middlewares/validateName');

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', validateNewProductName, productsController.addNewProduct);

module.exports = router;