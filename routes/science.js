var express = require('express');
var router = express.Router();

const scienceCtrl = require('../controllers/science');

router.get('/', scienceCtrl.questionone);
router.get('/question2', scienceCtrl.questiontwo);
router.get('/question3', scienceCtrl.questionthree);
router.get('/question4', scienceCtrl.questionfour);
router.get('/question5', scienceCtrl.questionfive);

module.exports = router;