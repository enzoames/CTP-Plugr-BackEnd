const express = require('express');
const models = require('../models');
const Leagues = models.Leagues;
const router = express.Router();

// GET all teams belonging to a league
// TODO: Implement This Route
router.get('/', (req, res) => {
    models.Leagues.findAll()
    .then((leagues) => {
        res.json({
            leagues: leagues,
            msg: "Successful GET to '/' route"
        })
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

router.post('/register', (req, res) => {
    
        Leagues.create({ 
            name: req.body.name,
            established: req.body.established,
            description: req.body.description,
            uniqueRules: req.body.uniqueRules,
            state: req.body.state,
            leagueOrganizer: req.user.id
      }).then((team) => {
        res.json({
        msg: "Successful League Registration"
            });
      }).catch((e) => {
          console.log(e);
        res.json({
        msg: e
        });
              });
    
});



module.exports = router;
