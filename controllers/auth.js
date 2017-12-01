const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const Users = models.Users;

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
    /*
    res.json({
        msg: "Successful POST To login"
    });
    */
    
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })(req, res);
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

//currently not taking profilePhoto!
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
        Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }).then((user) => {
        req.login(user, () =>
          res.redirect('/profile')
        );
      }).catch((e) => {
        res.json({
        msg: e
        });
              });
    
});

module.exports = router;


