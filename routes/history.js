var express = require('express');
var router = express.Router();

const historyCtrl = require('../controllers/history');

router.get('/', historyCtrl.index);

module.exports = router;