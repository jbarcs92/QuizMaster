const Quiz = require('../models/quiz');

module.exports = {
    index
}

async function index(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/questions', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/questions', { errorMsg: err.message });
    }
}