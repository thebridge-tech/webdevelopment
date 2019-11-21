/* -------------------------------------------------------- */
/* ---------------- Initializing app state ---------------- */
/* -------------------------------------------------------- */

/* ---------------- Declaring global variables ---------------- */

var quizQuestions
var currentQuestion
var currentAnswer
var rightAnswers

/* ---------------- Selecting DOM objects ---------------- */

var startContainer = document.getElementById('start')
var startButton = document.getElementById('startBtn')

var gameContainer = document.getElementById('game')
var questionText = document.getElementById('question')
var questionImage = document.getElementById('image')
var nextButton = document.getElementById('nextBtn')

var answerElements = document.getElementsByClassName('answer')

var endContainer = document.getElementById('end')
var resultContainer = document.getElementById('results')
var endButton = document.getElementById('endBtn')

/* ---------------- Binding handlers to events ---------------- */

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', goToNextQuestion)
endButton.addEventListener('click', startGame)

for (var i = 0; i < answerElements.length; i++) {
  answerElements[i].addEventListener('click', selectAnswer)
}

/* ------------------------------------------------------------ */
/* -------------------- Defining functions -------------------- */
/* ------------------------------------------------------------ */

function startGame() {
  
  // Reset initial values
  currentQuestion = 0
  currentAnswer = 0
  rightAnswers = 0
  quizQuestions = getQuestions()

  // Change app state
  endContainer.style.display = 'none' // Hide
  startContainer.style.display = 'none' // Hide
  gameContainer.style.display = 'flex'  // Show

  goToNextQuestion()
}

function goToNextQuestion() {

  // If it's not the first one AND it's right
  if (currentQuestion > 0 && quizQuestions[currentQuestion-1].correct == currentAnswer) {

    rightAnswers++;
  }
  
  // If it's not the last one
  if (currentQuestion < quizQuestions.length) {

    // Update question data
    showQuestion(quizQuestions[currentQuestion])

    currentQuestion++

  // Game over
  } else {
    endGame()
  }
}

function showQuestion(question) {
  
  // Show question text and image
  questionText.innerText = question.text
  questionImage.src = question.image

  // Show answers
  for (var i = 0; i < answerElements.length; i++) {
    answerElements[i].innerText = question.answers[i]
  }

  unselectAnswers()
}

function selectAnswer() {
  
  // Unselect all
  unselectAnswers()

  // Select current
  this.classList.add('selected')

  if (this.classList.contains('redBtn')) {
    currentAnswer = 0
  } else
  if (this.classList.contains('blueBtn')) {
    currentAnswer = 1
  } else
  if (this.classList.contains('yellowBtn')) {
    currentAnswer = 2
  } else
  if (this.classList.contains('greenBtn')) {
    currentAnswer = 3
  }
}

function unselectAnswers() {
  
  for (var i = 0; i < answerElements.length; i++) {
    answerElements[i].classList.remove('selected')
  }
}

function endGame() {
  
  // Show results
  resultContainer.innerText = 'Correct: ' + rightAnswers + ' - '
  resultContainer.innerText += 'Wrong: ' + (quizQuestions.length - rightAnswers)
  
  // Change app state
  gameContainer.style.display = 'none'  // Hide
  endContainer.style.display = 'flex' // Show
}