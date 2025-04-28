const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// Create user profile
router.post(
    '/createuser',
    [
        body('email', 'Incorrect email').isEmail(),
        body('name').isLength({ min: 3 }),
        body('password', 'Incorrect Password').isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const { email, name, password} = req.body;

            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                console.log(user);
                return res.status(400).json({ error: "User already exists" , user:user.name});
                
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            user = new User({
                name,
                email,
                password: hashedPassword,
            });

            await user.save();

            res.json({ success: true });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
