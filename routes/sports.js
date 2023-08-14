var express = require('express');
var router = express.Router();

const sportsCtrl = require('../controllers/sports');

router.get('/', sportsCtrl.questionone);
router.get('/question2', sportsCtrl.questiontwo);
router.get('/question3', sportsCtrl.questionthree);
router.get('/question4', sportsCtrl.questionfour);
router.get('/question5', sportsCtrl.questionfive);

module.exports = router;