const Quiz = require('../models/quiz');

module.exports = {
    index,
    show,
    new: newQuiz,
    create,
    edit,
    update,
    delete: deleteQuiz
};

async function index(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('quizzes/index', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('quizzes/index', { errorMsg: err.message });
    }
}

async function show(req,res) {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.render('quizzes/show', { quiz });
    } catch (err) {
        console.log(err);
        res.render('quizzes/show', { errorMsg: err.message });
    }
}

function newQuiz(req,res) {
    res.render('quizzes/new', {errorMsg: '' });
}

async function create(req,res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        }
    try {
        await Quiz.create(req.body);
        res.redirect('/quizzes');
    } catch (err) {
        console.log(err);
        res.render('quizzes/new', { errorMsg: err.message});
    }
}

async function edit(req,res) {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.render('quizzes/edit', { quiz });
    } catch (err) {
        console.log(err);
        res.render('quizzes/edit', { errorMsg: err.message });
    }
}

async function update(req,res) {
    try {
        await Quiz.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/quizzes');
    } catch (err) {
        res.render('/quizzes', { errorMsg: err.message });
    }
}

async function deleteQuiz(req,res) {
    try {
        await Quiz.findByIdAndRemove(req.params.id);
        res.redirect('/quizzes');
    } catch (err) {
        res.render('/quizzes', { errorMsg: err.message });
    }
}