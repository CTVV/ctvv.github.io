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
// Try again
const tryAgainBtn = document.getElementById('tryAgain');
// Scoreboard
const scoreElements = document.querySelectorAll('.scores');
// Go to menu
const goToMenuBtn = document.getElementById('goToMenu');
// go to score page
const goToScorepageBtn = document.getElementById('checkScoreboard');


// Consts

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
// Game Logic

// local Storage
function scoreToLocalStorage() {
    localStorage.setItem('bestScore', JSON.stringify(bestScoreArray));
}

// Show Category Page
function showCategoryPage() {
    menuPage.classList.add('not-visible');
    selectPage.classList.remove('not-visible');
}

function updateScorePage(){
    bestScoreArray.push({'number': numberOfQuestions, 'category': chosenCategory, 'points': points});
    scoreToLocalStorage();
}

function showEndGame() {
    gamePage.classList.add('not-visible');
    endGamePage.classList.remove('not-visible');
    finalScore.textContent = `${points}/${questionArray.length}`;
    updateScorePage();
}

function goToScorePage() {
    console.log(bestScoreArray);
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

function gameEvaluating(e) {
    if (e.target.textContent === correctAnswer) {
        points++;
    } 
    if (count < questionArray.length){
        populateDOM(count)
    } else {
        showEndGame();
    }
}

function isPageAvaible(){
    if (isDataAvaible){
        loader.classList.add('not-visible');
        populateDOM(0);
        gameStarted = true;
        clearInterval(myInterval);
    } else {
        return;
    }
}

function prepareForGame() {
    selectPage.classList.add('not-visible');
    loader.classList.remove('not-visible');
    getQuestions();
    myInterval = setInterval(isPageAvaible, 1000);
}

function arrayMaker(index) {
    question.textContent = questionArray[index].question;
    actualQuestionArray = questionArray[index].incorrect_answers.slice(0, 3);
    correctAnswer = questionArray[index].correct_answer;
    actualQuestionArray.push(questionArray[index].correct_answer);
}

// Populate DOM
function populateDOM(index) {
    if (!gameStarted) {
        gamePage.classList.remove('not-visible');
    }
    arrayMaker(index);
    shuffle(actualQuestionArray);
    answers.forEach( (el , i) => {
        el.textContent = actualQuestionArray[i];
    });
    count++;
}

// Fetch data from server
async function getQuestions() {
    try {
        let apiUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=easy&type=multiple`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        questionArray = data.results;
        isDataAvaible = true;
    } catch (error) {
        console.log(error);
    }
}

function loadMenu() {
    scoreboardPage.classList.add('not-visible');
    menuPage.classList.remove('not-visible');
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
    let chosenCategory = '';
    menuPage.classList.remove('not-visible');
}

function chooseCategoryID(e) {
    categoryId = Number(e.srcElement.value);
    chosenCategory = e.srcElement.textContent;
    prepareForGame();
}

function chooseNumberOfQuestions(e) {
    numberOfQuestions = Number(e.srcElement.value);
    showCategoryPage();
}

function getScoreFromLocalStorage() {
    if(localStorage.bestScore){
        bestScoreArray = JSON.parse(localStorage.bestScore);
    }
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