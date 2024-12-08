const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const laptopRoutes = require('./routes/laptopRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const authRoutes = require('./routes/authRoutes'); 
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/laptops', laptopRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
