const { Router } = require('express');

const productsController = require('../controllers/productsController');

const validateNewProductName = require('../middlewares/validateName');

const router = Router();

router.get('/', productsController.getAllProducts);
router.post('/', validateNewProductName, productsController.addNewProduct);
router.get('/:id', productsController.getProductById);
router.put('/:id', productsController.updateNewProduct);

module.exports = router;