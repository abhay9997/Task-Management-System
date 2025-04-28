
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: 'Open Todo' },
  priority: { type: String, default: 'Low' },
  description: { type: String, default: '' },
  duration: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('task', taskSchema);
