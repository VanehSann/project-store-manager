const { Router } = require('express');

const salesController = require('../controllers/salesController');

const validateSales = require('../middlewares/validateSales');

const router = Router();

router.get('/', salesController.getAllSales);
router.post('/', validateSales, salesController.addNewSale);
router.get('/:id', salesController.getSaleById);

module.exports = router;