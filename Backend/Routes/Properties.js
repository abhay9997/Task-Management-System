const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Create a new property
router.post('/Properties', async (req, res) => {
  const {title, status, priority, deadline, description ,userId } = req.body;

  try {
    const newProperty = new Property({
      title,
      status,
      priority,
      deadline,
      description,
      userId,
    });
    const savedProperty = await newProperty.save();

    res.status(201).json({
      success: true,
      data: savedProperty
    });
  } catch (error) {
    console.error('Error saving property:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

module.exports = router;

