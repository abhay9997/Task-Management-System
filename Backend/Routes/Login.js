const express = require('express')
const router = express.Router()
const User = require("..//models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
const jwtSecret = "mynameisearthcallfromuniverse"
// login user

router.post("/login", [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const email = req.body.email;
        const userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        // this line encrypted password with user password

        const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)
        return res.json({ success: true, authToken: authToken, userId: userData.id });

    }

    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Enter Correct UserId and Password" });
    }
});

module.exports = router;
