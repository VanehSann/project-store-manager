const { Router } = require('express');

const salesController = require('../controllers/salesController');

const validateSales = require('../middlewares/validateSales');

const router = Router();

router.post('/', validateSales, salesController.addNewSales);

module.exports = router;