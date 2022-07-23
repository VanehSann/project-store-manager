const { Router } = require('express');

const productsController = require('../controllers/productsController');

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

module.exports = router;