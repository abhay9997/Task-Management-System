const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Property', PropertySchema);
