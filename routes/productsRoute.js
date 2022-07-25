const { Router } = require('express');

const productsController = require('../controllers/productsController');

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.addNewProduct);

module.exports = router;