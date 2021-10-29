const questions = ["Hoe kunnen we de druk op de zorg verminderen?", "Wat vind u van vaccineren?", "Moeten rijkere mensen in de samenleving meer belasting betalen?"];
const questionHTML = document.getElementById("question");
questionHTML.innerHTML = questions[randomIntFromInterval(1, 3) - 1];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}