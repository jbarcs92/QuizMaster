var express = require('express');
var router = express.Router();

const historyCtrl = require('../controllers/history');

router.get('/', historyCtrl.questionone);
router.get('/question2', historyCtrl.questiontwo);
router.get('/question3', historyCtrl.questionthree);
router.get('/question4', historyCtrl.questionfour);
router.get('/question5', historyCtrl.questionfive);

module.exports = router;