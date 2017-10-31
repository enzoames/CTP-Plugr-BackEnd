const express = require('express');
const models = require('../models');

const router = express.Router();

// GET all teams belonging to a league
// TODO: Implement This Route
router.get('/', (req, res) => {
    res.json({
        msg: "Successful GET to '/' route"
    });
});

// GET upcoming games for a given league
// TODO: Implement This Route
router.get('/:id', (req, res) => {
    res.json({
        msg: "Successful GET to '/:id' route"
    });
});

// GET top leagues in Plugr Platform (NYC)
// TODO: Implement This Route
router.get('/city/', (req, res) => {
    res.json({
        msg: "Successful GET to '/city/' route"
    });
});

// GET leagues by zip / city
// TODO: Implement This Route
router.get('/city/:zip', (req, res) => {
    res.json({
        msg: "Successful GET to '/city/:zip' route"
    });
});


module.exports = router;
