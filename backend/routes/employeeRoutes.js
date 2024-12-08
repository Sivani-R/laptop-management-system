const express = require('express');
const { getAllEmployees, assignLaptop, getEmployeeLaptops } = require('../controllers/employeeController');

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/assign', assignLaptop);
router.get('/:id/laptops', getEmployeeLaptops);

module.exports = router;
