import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LaptopList.css';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('/api/laptops');
        setLaptops(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <div className="laptop-list">
      <h2>Laptop List</h2>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Serial Number</th>
            <th>Status</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop) => (
            <tr key={laptop._id}>
              <td>{laptop.brand}</td>
              <td>{laptop.model}</td>
              <td>{laptop.serialNumber}</td>
              <td>{laptop.status}</td>
              <td>{new Date(laptop.purchaseDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaptopList;
