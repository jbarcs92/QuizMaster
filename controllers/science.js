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
      const questionOne = await Quiz.find({category: "Science", questionNo: 1});
      res.render('science/question1', { questionOne });
    } catch (err) {
      console.log(err);
      res.render('science/question1', { errorMsg: err.message });
    }
}

async function questiontwo(req,res) {
    try {
      const questionTwo = await Quiz.find({category: "Science", questionNo: 2});
      res.render('science/question2', { questionTwo });
    } catch (err) {
      console.log(err);
      res.render('science/question2', { errorMsg: err.message });
    }
}
async function questionthree(req,res) {
    try {
      const questionThree = await Quiz.find({category: "Science", questionNo: 3});
      res.render('science/question3', { questionThree });
    } catch (err) {
      console.log(err);
      res.render('science/question3', { errorMsg: err.message });
    }
}
async function questionfour(req,res) {
    try {
      const questionFour = await Quiz.find({category: "Science", questionNo: 4});
      res.render('science/question4', { questionFour });
    } catch (err) {
      console.log(err);
      res.render('science/question4', { errorMsg: err.message });
    }
}
async function questionfive(req,res) {
    try {
      const questionFive = await Quiz.find({category: "Science", questionNo: 5});
      res.render('science/question5', { questionFive });
    } catch (err) {
      console.log(err);
      res.render('science/question5', { errorMsg: err.message });
    }
}
