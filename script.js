const menu = document.querySelector('.menu');
const menuPage = document.querySelector('.game-menu');
const selectPage = document.querySelector('.quiz-selection');
const gamePage = document.querySelector('.game');
const endGamePage = document.querySelector('.end-game');
const scoreboardPage = document.querySelector('.scoreboard');
// Menu Elements
const loader = document.querySelector('.loading');
const questionChoice = document.querySelectorAll('.query-question');
const scoreboardEl = document.getElementById('scoreboard');
const box = document.querySelector('.box');
// Category
const categoryChoice = document.querySelectorAll('.query-category');
const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const finalScore = document.getElementById('score');
const numberOfQuestionEl = document.querySelector('.question-number');
// Try again
const tryAgainBtn = document.getElementById('tryAgain');
// Scoreboard
const scoreElements = document.querySelectorAll('.scores');
// Go to menu
const goToMenuBtn = document.getElementById('goToMenu');
// go to score page
const goToScorepageBtn = document.getElementById('checkScoreboard');

// Variables
let numberOfQuestions = 0;
let categoryId = 0;
let questionArray = [];
let count = 0;
let points = 0;
let correctAnswer = '';
let actualQuestionArray = [];
let isDataAvaible = false;
let gameStarted = false;
let chosenCategory = '';
let bestScoreArray = [];

// If someone has played this game before, he will get his bestScores
function getScoreFromLocalStorage() {
    if(localStorage.bestScore){
        bestScoreArray = JSON.parse(localStorage.bestScore);
    }
}

// Get number of questions from user (Attached to event listeners)
function chooseNumberOfQuestions(e) {
    numberOfQuestions = Number(e.srcElement.value);
    showCategoryPage();
}

// Show Category Page
function showCategoryPage() {
    menuPage.classList.add('not-visible');
    selectPage.classList.remove('not-visible');
}

// Get category from user (Attached to event listeners)
function chooseCategoryID(e) {
    categoryId = Number(e.srcElement.value);
    chosenCategory = e.srcElement.textContent;
    prepareForGame();
}

// Preparing game, by getting questions from API
function prepareForGame() {
    selectPage.classList.add('not-visible');
    loader.classList.remove('not-visible');
    getQuestions();
    myInterval = setInterval(dataChecker, 1000);
}

// Fetch data from server
async function getQuestions() {
    try {
        let apiUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&type=multiple`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        questionArray = data.results;
        isDataAvaible = true;
    } catch (error) {
        console.log(error);
    }
}

// Checks if data is avaible to use
function dataChecker(){
    if (isDataAvaible){
        loader.classList.add('not-visible');
        // Populate first time DOM
        populateDOM(0);
        numberOfQuestionEl.classList.remove('not-visible');
        gameStarted = true;
        clearInterval(myInterval);
    } else {
        return;
    }
}

// Populate DOM
function populateDOM(index) {
    if (!gameStarted) {
        gamePage.classList.remove('not-visible');
    }
    changeQuestion(index);
    changeAnswers(index);
    // Use algorithm to shuffle answers array
    shuffle(actualQuestionArray);
    answers.forEach( (el , i) => {
        el.textContent = actualQuestionArray[i];
    });
    count++;
    updateNumberOfQuestion();
}

function updateNumberOfQuestion(){
    numberOfQuestionEl.textContent = `${count}/${questionArray.length}`;
}

function changeQuestion(index){
    question.textContent = questionArray[index].question;
}

function changeAnswers(index) {
    actualQuestionArray = questionArray[index].incorrect_answers.slice(0, 3);
    correctAnswer = questionArray[index].correct_answer;
    actualQuestionArray.push(questionArray[index].correct_answer);
}

function gameEvaluating(e) {
    if (e.target.textContent === correctAnswer) {
        points++;
    } 
    if (count < questionArray.length){
        populateDOM(count);
    } else {
        numberOfQuestionEl.classList.add('not-visible');
        showEndGamePage();
    }
}

function showEndGamePage() {
    gamePage.classList.add('not-visible');
    endGamePage.classList.remove('not-visible');
    finalScore.textContent = `${points}/${questionArray.length}`;
    updateScorePage();
}

function updateScorePage(){
    if (bestScoreArray.length > 7){
        bestScoreArray.push({'number': numberOfQuestions, 'category': chosenCategory, 'points': points});
        bestScoreArray.sort((a, b) => {
            return b.points/b.number - a.points/a.number;
        });
    } else {
        if (bestScoreArray[6].points/bestScoreArray[6].number < points/numberOfQuestions) {
            bestScoreArray.pop();
            bestScoreArray.push({'number': numberOfQuestions, 'category': chosenCategory, 'points': points});
            bestScoreArray.sort((a, b) => {
                return b.points/b.number - a.points/a.number;
            });
        }
    }
    scoreToLocalStorage();
}

// local Storage
function scoreToLocalStorage() {
    localStorage.setItem('bestScore', JSON.stringify(bestScoreArray));
}

function playAgain(){
    endGamePage.classList.add('not-visible');
    numberOfQuestions = 0;
    categoryId = 0;
    questionArray = [];
    count = 0;
    points = 0;
    correctAnswer = '';
    actualQuestionArray = [];
    isDataAvaible = false;
    gameStarted = false;
    chosenCategory = '';
    menuPage.classList.remove('not-visible');
}

function goToScorePage() {
    menuPage.classList.add('not-visible');
    scoreboardPage.classList.remove('not-visible');
    box.textContent = '';
    bestScoreArray.forEach((el, i) => {
        const newScore = document.createElement('div');
        newScore.classList.add('scores');
        newScore.textContent = `${bestScoreArray[i].category} - ${bestScoreArray[i].points}/${bestScoreArray[i].number}`;
        box.appendChild(newScore);
    });
}

function loadMenu() {
    scoreboardPage.classList.add('not-visible');
    menuPage.classList.remove('not-visible');
}

// Adding event listeners
function questionEventListeners(){
    questionChoice.forEach( (el) => {
        el.addEventListener('click', (e) => chooseNumberOfQuestions(e));
    });
}

function categoryEventListeners(){
    categoryChoice.forEach( (el) => {
        el.addEventListener('click', (e) => chooseCategoryID(e));
    });
}
function answersEventListeners(){
    answers.forEach((el) => {
        el.addEventListener('click', (e) => gameEvaluating(e));
    });
}
// On load
getScoreFromLocalStorage();
questionEventListeners();
categoryEventListeners();
answersEventListeners();
// Event Listeners
tryAgainBtn.addEventListener('click', playAgain);
goToMenuBtn.addEventListener('click', loadMenu);
goToScorepageBtn.addEventListener('click', goToScorePage);