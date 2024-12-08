import React from 'react';
import LaptopForm from './LaptopForm';
import LaptopList from './LaptopList';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="overview-cards">
        <div className="card">Total Laptops</div>
        <div className="card">Assigned Laptops</div>
        <div className="card">Available Laptops</div>
        <div className="card">Laptops Under Maintenance</div>
      </div>
      <LaptopForm />
      <LaptopList />
    </div>
  );
}

export default AdminDashboard;
