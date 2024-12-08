const Maintenance = require('../models/maintenance');
const Issue = require('../models/issue');
const Laptop = require('../models/laptop');

const addMaintenanceLog = async (req, res) => {
  try {
    const { laptopId, description, status, cost } = req.body;
    const maintenance = new Maintenance({ laptopId, description, status, cost });
    await maintenance.save();

    if (status === 'maintenance') {
      await Laptop.findByIdAndUpdate(laptopId, { status: 'maintenance' });
    }

    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMaintenanceHistory = async (req, res) => {
  try {
    const { laptopId } = req.params;
    const maintenanceLogs = await Maintenance.find({ laptopId });
    res.status(200).json(maintenanceLogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const reportIssue = async (req, res) => {
  try {
    const { laptopId, description, priority, reportedBy } = req.body;
    const issue = new Issue({ laptopId, description, priority, reportedBy });
    await issue.save();

    await Laptop.findByIdAndUpdate(laptopId, { status: 'maintenance' });

    res.status(201).json(issue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addMaintenanceLog, getMaintenanceHistory, reportIssue };
