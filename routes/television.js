var express = require('express');
var router = express.Router();

const televisionCtrl = require('../controllers/television');

router.get('/', televisionCtrl.questionone);
router.get('/question2', televisionCtrl.questiontwo);
router.get('/question3', televisionCtrl.questionthree);
router.get('/question4', televisionCtrl.questionfour);
router.get('/question5', televisionCtrl.questionfive);

module.exports = router;