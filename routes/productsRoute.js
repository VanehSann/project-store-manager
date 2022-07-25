const { Router } = require('express');

const productsController = require('../controllers/productsController');

const validateNewProductName = require('../middlewares/validateName');

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/search', productsController.getSearchProducts);
router.post('/', validateNewProductName, productsController.addNewProduct);
router.get('/:id', productsController.getProductById);
router.put('/:id', productsController.updateNewProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;