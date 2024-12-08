const express = require('express');
const { addMaintenanceLog, getMaintenanceHistory, reportIssue } = require('../controllers/maintenanceController');

const router = express.Router();

router.post('/', addMaintenanceLog);
router.get('/:laptopId', getMaintenanceHistory);
router.post('/report', reportIssue);

module.exports = router;
