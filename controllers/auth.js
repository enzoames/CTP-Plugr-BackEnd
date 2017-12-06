const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const Users = models.Users;
const Teams = models.Teams;

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


router.post('/login', 
    passport.authenticate('local'),
    (req, res) =>{
        Users.findOne({where: {email: req.user.email} }).then(user =>{
            res.json({
            users: user,
            msg: "Successful GET to '/' route"
            })
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

//currently not taking profilePhoto!
router.post('/register', (req, res) => {
    
    /** The following helper function checks whether the provided email already exist in the DB */
    function isEmailUsed(email){
        return Users.count({where: {email: email}})
        .then(count => {
            if (count !== 0){
                return true;
            }
            return false;
        });
    }

    isEmailUsed(req.body.email).then(isEmailUsed =>{
        if (isEmailUsed){
            res.json({
                msg: "The email address provided has been used to register an account before"
            });
        }
        else{
            Users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                userType: req.body.userType
            })
            .then((newUser) => {
                res.json(newUser);
            })
        }
    })
    .catch((e) => {
        res.sendStatus(500);
    });
});

router.post('/team-register', (req, res) => {
        Teams.create({ 
            teamName: req.body.teamName,
            teamAbbr: req.body.teamAbbr,
            description: req.body.description,
            teamPicture: req.body.teamPicture,
            teamLogo: req.body.teamLogo,
            teamCaptain: req.user.id
      }).then((team) => {
        res.json({
        msg: "Successful Team Registration"
            });
      }).catch((e) => {
          console.log(e);
        res.json({
        msg: e
        });
              });
});

module.exports = router;
