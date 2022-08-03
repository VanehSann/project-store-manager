const { Router } = require('express');

const salesController = require('../controllers/salesController');

const validateSales = require('../middlewares/validateSales');

const router = Router();

router.get('/', salesController.getAllSales);
router.post('/', validateSales, salesController.addNewSale);
router.get('/:id', salesController.getSaleById);
router.put('/:id', salesController.updateNewSale);
router.delete('/:id', salesController.deleteSale);

module.exports = router;