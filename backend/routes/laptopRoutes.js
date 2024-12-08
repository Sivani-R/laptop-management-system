const express = require('express');
const { addLaptop, getAllLaptops, updateLaptop, deleteLaptop } = require('../controllers/laptopController');

const router = express.Router();

router.post('/', addLaptop);
router.get('/', getAllLaptops);
router.put('/:id', updateLaptop);
router.delete('/:id', deleteLaptop);

module.exports = router;
