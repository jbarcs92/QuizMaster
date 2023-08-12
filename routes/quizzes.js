var express = require('express');
var router = express.Router();

const quizzesCtrl = require('../controllers/quizzes');

router.get('/', quizzesCtrl.index);
router.get('/new', quizzesCtrl.new);
router.get('/:id/edit', quizzesCtrl.edit);
router.get('/:id', quizzesCtrl.show);
router.post('/', quizzesCtrl.create);
router.put('/:id', quizzesCtrl.update);
router.delete('/:id', quizzesCtrl.delete);

module.exports = router;

