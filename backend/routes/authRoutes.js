const express = require('express');
const { authEmployee, registerEmployee } = require('../controllers/authController');

const router = express.Router();

router.post('/login', authEmployee);
router.post('/register', registerEmployee);

module.exports = router;
