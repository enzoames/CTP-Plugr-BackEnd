const express = require('express');
const router = express.Router();

router.use('/leagues', require('./leagues'));
router.use('/teams', require('./teams'));
router.use('/alt', require('./alt'));
router.use('/', require('./home'));


module.exports = router;
