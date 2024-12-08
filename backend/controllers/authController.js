const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Employee = require('../models/employee');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const authEmployee = async (req, res) => {
  const { email, password } = req.body;

  const employee = await Employee.findOne({ email });

  if (employee && (await bcrypt.compare(password, employee.password))) {
    res.json({
      _id: employee.id,
      name: employee.name,
      email: employee.email,
      role: employee.role,
      token: generateToken(employee._id, employee.role),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

const registerEmployee = async (req, res) => {
  const { name, email, password, department, role } = req.body;

  const employeeExists = await Employee.findOne({ email });

  if (employeeExists) {
    res.status(400).json({ message: 'Employee already exists' });
  } else {
    const employee = await Employee.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      department,
      role,
    });

    if (employee) {
      res.status(201).json({
        _id: employee.id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
        token: generateToken(employee._id, employee.role),
      });
    } else {
      res.status(400).json({ message: 'Invalid employee data' });
    }
  }
};

module.exports = { authEmployee, registerEmployee };
