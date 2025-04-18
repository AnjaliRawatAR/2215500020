const express = require('express');
const { handleNumber } = require('../controllers/controllers');

const router = express.Router();

router.get('/:numberId', handleNumber);

module.exports = router;