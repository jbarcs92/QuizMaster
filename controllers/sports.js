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
      res.render('sports/question1', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('sports/question1', { errorMsg: err.message });
    }
}

async function questiontwo(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('sports/question2', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('sports/question2', { errorMsg: err.message });
    }
}

async function questionthree(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('sports/question3', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('sports/question3', { errorMsg: err.message });
    }
}

async function questionfour(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('sports/question4', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('sports/question4', { errorMsg: err.message });
    }
}
async function questionfive(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('sports/question5', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('sports/question5', { errorMsg: err.message });
    }
}