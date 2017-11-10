const express = require('express');
const router = express.Router();

router.use('/api/plugr/auth', require('./auth'));
router.use('/api/plugr/leagues', require('./leagues'));
router.use('/api/plugr/teams', require('./teams'));
router.use('/api/plugr/alt', require('./alt'));
router.use('/api/plugr', require('./home'));

module.exports = router;
