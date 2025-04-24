// Application dependencies
const express = require('express');
const router = express.Router();
const Planets = require('../models/Planets.js');

// route definitions
router.get('/', getPlanets);

// Route handlers
async function getPlanets (req, res) {
    try {
        const planets = await Planets.find();
        res.json({ success: true, data: planets});
    } catch(error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Something went wrong!'});
    }
}

module.exports = router;