const express = require('express');
const models = require('../models');
const Teams = models.Teams;
const router = express.Router();

// GET information top teams in NYC
// TODO: Implement This Route
router.get('/', (req, res) => {
    models.Teams.findAll()
        .then((teams) => {
            res.json({
                teams: teams,
                msg: "Successful GET to '/' route"
            })
        });
});

// GET information for a given team
// TODO: Implement This Route
router.get('/:id', (req, res) => {
    res.json({
        msg: "Successful GET to '/:id' route"
    });
});

router.post('/register', (req, res) => {
    
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
