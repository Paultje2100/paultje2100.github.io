//variables
const questionPool = ["Hoe kunnen we de druk op de zorg verminderen?", "Wat vind u van vaccineren?", "Moeten rijkere mensen in de samenleving meer belasting betalen?"];
const starterText = "Gespreksstarter:";
const questionText = questionPool[randomIntFromInterval(1, 3) - 1];

let questionHTML = document.getElementById("question");
let starterHTML = document.getElementById('starter');
let goalContainerHTML = document.getElementById('goal-container');
let videoHTML = document.getElementById('video');

const delay = ms => new Promise(res => setTimeout(res, ms));

//functions
let i = 0;
function writeStarterText() {
    if (i < starterText.length) {
        starterHTML.innerHTML += starterText.charAt(i);
        i++;
        setTimeout(writeStarterText, 50);
    }	
}

let x = 0;
function writeQuestionText() {
    if (x < questionText.length) {
        questionHTML.innerHTML += questionText.charAt(x);
        x++;
        setTimeout(writeQuestionText, 30);
    }	
}

function fadeInGoal() {
    goalContainerHTML.style.opacity = 1;
}

function fadeInVideo() {
    videoHTML.style.opacity = 1;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//execution  
async function execution() {
    writeStarterText();
    await delay(1500)
    fadeInVideo();
    writeQuestionText();
    await delay(2000)
    fadeInGoal();
}

execution();
if(questionText.length < 30) {
    questionHTML.style.fontSize = 40;
}
else if(questionText.length > 30 && questionText.length < 40) {
    questionHTML.style.fontSize = 35;
}
else {
    questionHTML.style.fontSize = 25;
}


