import React from 'react';
import './EmployeePortal.css';

const EmployeePortal = () => {
  return (
    <div className="employee-portal">
      <h1>Employee Portal</h1>
      <div className="assigned-laptop">
        <h2>Assigned Laptop</h2>
        <p>Brand: XYZ</p>
        <p>Model: 123</p>
        <p>Serial Number: ABC123</p>
        <p>Condition: Good</p>
      </div>
      <form className="request-form">
        <h2>Request a New Laptop</h2>
        <input type="text" placeholder="Reason for request" />
        <button type="submit">Submit Request</button>
      </form>
      <form className="issue-form">
        <h2>Report an Issue</h2>
        <textarea placeholder="Describe the issue"></textarea>
        <select>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}

export default EmployeePortal;
