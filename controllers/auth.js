const express = require('express');
const models = require('../models');

const router = express.Router();

// ==================================
// ============== LOAD ==============
// ==================================

router.get('/load', (req, res) => {
    res.json({
        msg: "Successful GET to load"
    });
});


// ===================================
// ============== LOGIN ==============
// ===================================

router.post('/login', (req, res) => {
    res.json({
        msg: "Successful POST To login"
    });
});



// ====================================
// ============== LOGOUT ==============
// ====================================

router.post('/logout', (req, res) => {
    res.json({
        msg: "Successful POST to logout"
    });
});



// ======================================
// ============== REGISTER ==============
// ======================================

router.post('/register', (req, res) => {
    console.log("\n\nbody: ", req.body);
    // models.Users.create({
    //   question: req.body.question
    // })
    // .then((user) => {
    //   res.json(user);
    // })
    // .catch(() => {
    //   res.sendStatus(400);
    // })
    res.json({
        msg: "Successful POST to register"
    });
});

module.exports = router;


