const Quiz = require('../models/quiz');

module.exports = {
    questionone,
    questiontwo, 
    questionthree,
    questionfour, 
    questionfive
}


async function questionone(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/question1', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/question1', { errorMsg: err.message });
    }
}

async function questiontwo(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/question2', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/question2', { errorMsg: err.message });
    }
}

async function questionthree(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/question3', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/question3', { errorMsg: err.message });
    }
}

async function questionfour(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/question4', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/question4', { errorMsg: err.message });
    }
}
async function questionfive(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('history/question5', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('history/question5', { errorMsg: err.message });
    }
}
