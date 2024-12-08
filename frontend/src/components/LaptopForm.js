import React, { useState } from 'react';
import axios from 'axios';
import './LaptopForm.css';

const LaptopForm = () => {
  const [laptop, setLaptop] = useState({
    brand: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
  });

  const handleChange = (e) => {
    setLaptop({ ...laptop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/laptops', laptop);
      alert('Laptop added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding laptop');
    }
  };

  return (
    <form className="laptop-form" onSubmit={handleSubmit}>
      <h2>Add New Laptop</h2>
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={laptop.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={laptop.model}
        onChange={handleChange}
      />
      <input
        type="text"
        name="serialNumber"
        placeholder="Serial Number"
        value={laptop.serialNumber}
        onChange={handleChange}
      />
      <input
        type="date"
        name="purchaseDate"
        value={laptop.purchaseDate}
        onChange={handleChange}
      />
      <button type="submit">Add Laptop</button>
    </form>
  );
}

export default LaptopForm;
