const express = require('express');
const models = require('../models');

const router = express.Router();

// GET information top teams in NYC
// TODO: Implement This Route
router.get('/', (req, res) => {
    res.json({
        msg: "Successful GET to '/' route"
    });
});

// GET information for a given team
// TODO: Implement This Route
router.get('/:id', (req, res) => {
    res.json({
        msg: "Successful GET to '/:id' route"
    });
});


module.exports = router;
