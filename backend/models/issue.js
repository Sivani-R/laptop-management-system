const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  laptopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Laptop', required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  reportedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', issueSchema);
