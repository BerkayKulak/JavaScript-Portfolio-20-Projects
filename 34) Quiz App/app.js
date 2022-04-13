function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

var q1 = new Question(
  "what's the best programming language ?",
  ["C#", "javascript", "pyhton", "asp.net"],
  "javascript"
);

var q2 = new Question(
  "what's the most popular programming language ?",
  ["c#", "visual basic", "nodejs", "javascript"],
  "javascript"
);

var q3 = new Question(
  "what's the best modern programming language ?",
  ["C#", "javascript", "pyhton", "asp.net"],
  "javascript"
);

var questions = [q1, q2, q3];

var quiz = new Quiz(questions);

quiz.isFinish();
