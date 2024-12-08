const Employee = require('../models/employee');
const Assignment = require('../models/assignment');
const Laptop = require('../models/laptop');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignLaptop = async (req, res) => {
  try {
    const { laptopId, employeeId } = req.body;
    const assignment = new Assignment({ laptopId, employeeId });
    await assignment.save();

    await Laptop.findByIdAndUpdate(laptopId, { status: 'assigned' });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEmployeeLaptops = async (req, res) => {
  try {
    const { id } = req.params;
    const assignments = await Assignment.find({ employeeId: id }).populate('laptopId');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllEmployees, assignLaptop, getEmployeeLaptops };
