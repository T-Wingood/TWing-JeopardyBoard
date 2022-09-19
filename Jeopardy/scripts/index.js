//! Imports placeholder items from .placeholder-questions.js - do not alter. 
import placeholderQuestions from './placeholder-questions.js' 
// importing arrays to use
let natureCategory = placeholderQuestions.filter((question) => question.category === "Nature")
let animalCategory = placeholderQuestions.filter((question) => question.category === "Animals")
let computerCategory = placeholderQuestions.filter((question) => question.category === "Computers")
let mythologyCategory = placeholderQuestions.filter((question) => question.category === "Mythology")
let historyCategory = placeholderQuestions.filter((question) => question.category === "History")
let generalCategory = placeholderQuestions.filter((question) => question.category === "General")
let finalCategory = placeholderQuestions.filter((question) => question.category === "Final")

// Player Status 

let player = "playerone" //starts gamea with playerone

// Score

let scorePlayerOne = 0
let scorePlayerTwo = 0


// Queries 

const wrapper = document.querySelectorAll(".wrapper") // consists of data from the grid. 
let playerTurn = document.getElementById("player-turn") // player score text
let playerOneScore = document.getElementById("player-one-score") // score text
let playerTwoScore = document.getElementById("player-two-score")
let roundLink = document.getElementById("round-link") // links buttons
let finalLink = document.getElementById("final-link")
let roundGuess = document.getElementById("round-guess") // guess/pass butttons 
let roundPass = document.getElementById("round-pass")
let inputBox = document.getElementById("inputbox") //input box


//! Variables

let currentQuestionindex = "" // tells the program what the current question is based on the index of the imported array
let boxText = "" // used when wanting to update what the grid box says (point value vs question)
let pointValue = "" // pulled from the switch that matched with the boxID
let boxID = ""  // pulled from the switch that matched with the grid area.

function start(){

roundGuess.disabled = true // starts the game with guess/pass/links disabled 
roundPass.disabled = true
roundLink.disabled = true

playerTurn.innerText = "Player One's Turn" //starts the game with playerone first. 

roundLink.addEventListener(`click`,(e) =>{
        document.location = `./round-two.html?playerOneScore=${scorePlayerOne}&playerTwoScore=${scorePlayerTwo}`
})

finalLink.addEventListener(`click`,(e) =>{
    document.location = `./final-jeopardy.html?playerOneScore=${scorePlayerOne}&playerTwoScore=${scorePlayerTwo}&currentPlayer=${player}`
})

wrapper.forEach(list => { // Once someone clicks on the grid of questions, a switch is activated that leads to the specific questions of each category. This is designed based on the html classes assigned to each box. 
    list.addEventListener('click', (e) =>{ 
        roundGuess.disabled = false // Both the guess and pass buttons are re-enabled upon someone clicking on the box. 
        roundPass.disabled = false
        let question = e.path[0].className
        let id = e.path[0].id
        switch(question){
            case "nature":
                natureQuestions(id);
                break;
            case "animals":
                animalQuestions(id);
                break;
            case "computers":
                computerQuestions(id);
                break;
            case "mythology":
                mythologyQuestions(id);
                break;
            case "history":
                historyQuestions(id);
                break;
            case "general":
                generalQuestions(id);
                break;
        }       
    })
})
function questionAnswer(currentQuestionindex){ // Function built to tell the program which box on the grid is being altered. This also provides the answer to the question in the console. 
    console.log(currentQuestionindex.answer)
    document.getElementById(boxID).innerText = currentQuestionindex.question
    boxText = document.getElementById(boxID)
}
class questionValues { // A constructor was built to apply a specific question to each of the categories. To be refractored into something with more flexibility upon resubmission.
    constructor(questionindex, pointvalue, boxID){
        this.questionindex = questionindex;
        this.pointValue = pointvalue;
        this.boxID = boxID
    }
}
let onehundredn = new questionValues (natureCategory[0], 100, "100n")
let twohundredn = new questionValues (natureCategory[1], 200, "200n")
let threehundredn = new questionValues (natureCategory[2], 300, "300n")
let fourhundredn = new questionValues (natureCategory[3], 400, "400n")
let fivehundredn = new questionValues (natureCategory[4], 500, "500n")
let twohundredn2 = new questionValues (natureCategory[5], 200, "200-2n")
let fourhundredn2 = new questionValues (natureCategory[6], 400, "400-2n")
let sixhundredn = new questionValues (natureCategory[7], 600, "600n")
let eighthundredn = new questionValues (natureCategory[8], 800, "800n")
let onethousandn = new questionValues (natureCategory[9], 1000, "1000n")

let onehundreda = new questionValues (animalCategory[0], 100, "100a")
let twohundreda = new questionValues (animalCategory[1], 200, "200a")
let threehundreda = new questionValues (animalCategory[2], 300, "300a")
let fourhundreda = new questionValues (animalCategory[3], 400, "400a")
let fivehundreda = new questionValues (animalCategory[4], 500, "500a")
let twohundreda2 = new questionValues (animalCategory[5], 200, "200-2a")
let fourhundreda2 = new questionValues (animalCategory[6], 400, "400-2a")
let sixhundreda = new questionValues (animalCategory[7], 600, "600a")
let eighthundreda = new questionValues (animalCategory[8], 800, "800a")
let onethousanda = new questionValues (animalCategory[9], 1000, "1000a")

let onehundredc = new questionValues (computerCategory[0], 100, "100c")
let twohundredc = new questionValues (computerCategory[1], 200, "200c")
let threehundredc = new questionValues (computerCategory[2], 300, "300c")
let fourhundredc = new questionValues (computerCategory[3], 400, "400c")
let fivehundredc = new questionValues (computerCategory[4], 500, "500c")
let twohundredc2 = new questionValues (computerCategory[5], 200, "200-2c")
let fourhundredc2 = new questionValues (computerCategory[6], 400, "400-2c")
let sixhundredc = new questionValues (computerCategory[7], 600, "600c")
let eighthundredc = new questionValues (computerCategory[8], 800, "800c")
let onethousandc = new questionValues (computerCategory[9], 1000, "1000c")

let onehundredm = new questionValues (mythologyCategory[0], 100, "100m")
let twohundredm = new questionValues (mythologyCategory[1], 200, "200m")
let threehundredm = new questionValues (mythologyCategory[2], 300, "300m")
let fourhundredm = new questionValues (mythologyCategory[3], 400, "400m")
let fivehundredm = new questionValues (mythologyCategory[4], 500, "500m")
let twohundredm2 = new questionValues (mythologyCategory[5], 200, "200-2m")
let fourhundredm2 = new questionValues (mythologyCategory[6], 400, "400-2m")
let sixhundredm = new questionValues (mythologyCategory[7], 600, "600m")
let eighthundredm = new questionValues (mythologyCategory[8], 800, "800m")
let onethousandm = new questionValues (mythologyCategory[9], 1000, "1000m")

let onehundredh = new questionValues (historyCategory[0], 100, "100h")
let twohundredh = new questionValues (historyCategory[1], 200, "200h")
let threehundredh = new questionValues (historyCategory[2], 300, "300h")
let fourhundredh = new questionValues (historyCategory[3], 400, "400h")
let fivehundredh = new questionValues (historyCategory[4], 500, "500h")
let twohundredh2 = new questionValues (historyCategory[5], 200, "200-2h")
let fourhundredh2 = new questionValues (historyCategory[6], 400, "400-2h")
let sixhundredh = new questionValues (historyCategory[7], 600, "600h")
let eighthundredh = new questionValues (historyCategory[8], 800, "800h")
let onethousandh = new questionValues (historyCategory[9], 1000, "1000h")

let onehundredg = new questionValues (generalCategory[0], 100, "100g")
let twohundredg = new questionValues (generalCategory[1], 200, "200g")
let threehundredg = new questionValues (generalCategory[2], 300, "300g")
let fourhundredg = new questionValues (generalCategory[3], 400, "400g")
let fivehundredg = new questionValues (generalCategory[4], 500, "500g")
let twohundredg2 = new questionValues (generalCategory[5], 200, "200-2g")
let fourhundredg2 = new questionValues (generalCategory[6], 400, "400-2g")
let sixhundredg = new questionValues (generalCategory[7], 600, "600g")
let eighthundredg = new questionValues (generalCategory[8], 800, "800g")
let onethousandg = new questionValues (generalCategory[9], 1000, "1000g")

// Called functions that will provide information for the program on what data needs to be supplied for the box. --> To be refractored into a simplier solution involving Arrays. 

function natureQuestions(id){
    switch(id){
        case "100n":
            boxID = onehundredn.boxID
            currentQuestionindex = onehundredn.questionindex
            pointValue = onehundredn.pointValue
            questionAnswer(onehundredn.questionindex)
            break
        case "200n":
            boxID = twohundredn.boxID
            currentQuestionindex = twohundredn.questionindex
            pointValue = twohundredn.pointValue
            questionAnswer(twohundredn.questionindex)
            break
        case "300n":
            boxID = threehundredn.boxID
            currentQuestionindex = threehundredn.questionindex
            pointValue = threehundredn.pointValue
            questionAnswer(threehundredn.questionindex)
            break
        case "400n":
            boxID = fourhundredn.boxID
            currentQuestionindex = fourhundredn.questionindex
            pointValue = fourhundredn.pointValue
            questionAnswer(fourhundredn.questionindex)
            break
        case "500n":
            boxID = fivehundredn.boxID
            currentQuestionindex = fivehundredn.questionindex
            pointValue = fivehundredn.pointValue
            questionAnswer(fivehundredn.questionindex)
            break
        case "200-2n":
            boxID = twohundredn2.boxID
            currentQuestionindex = twohundredn2.questionindex
            pointValue = twohundredn2.pointValue
            questionAnswer(twohundredn2.questionindex)
            break
        case "400-2n":
            boxID = fourhundredn2.boxID
            currentQuestionindex = fourhundredn2.questionindex
            pointValue = fourhundredn2.pointValue
            questionAnswer(fourhundredn2.questionindex)
            break
        case "600n":
            boxID = sixhundredn.boxID
            currentQuestionindex = sixhundredn.questionindex
            pointValue = sixhundredn.pointValue
            questionAnswer(sixhundredn.questionindex)
            break
        case "800n":
            boxID = eighthundredn.boxID
            currentQuestionindex = eighthundredn.questionindex
            pointValue = eighthundredn.pointValue
            questionAnswer(eighthundredn.questionindex)
            break
        case "1000n":
            boxID = onethousandn.boxID
            currentQuestionindex = onethousandn.questionindex
            pointValue = onethousandn.pointValue
            questionAnswer(onethousandn.questionindex)
            break
    }
}
function animalQuestions(id){
    switch(id){
        case "100a":
            boxID = onehundreda.boxID
            currentQuestionindex = onehundreda.questionindex
            pointValue = onehundreda.pointValue
            questionAnswer(onehundreda.questionindex)
            break
        case "200a":
            boxID = twohundreda.boxID
            currentQuestionindex = twohundreda.questionindex
            pointValue = twohundreda.pointValue
            questionAnswer(twohundreda.questionindex)
            break
        case "300a":
            boxID = threehundreda.boxID
            currentQuestionindex = threehundreda.questionindex
            pointValue = threehundreda.pointValue
            questionAnswer(threehundreda.questionindex)
            break
        case "400a":
            boxID = fourhundreda.boxID
            currentQuestionindex = fourhundreda.questionindex
            pointValue = fourhundreda.pointValue
            questionAnswer(fourhundreda.questionindex)
            break
        case "500a":
            boxID = fivehundreda.boxID
            currentQuestionindex = fivehundreda.questionindex
            pointValue = fivehundreda.pointValue
            questionAnswer(fivehundreda.questionindex)
            break
        case "200-2a":
            boxID = twohundreda2.boxID
            currentQuestionindex = twohundreda2.questionindex
            pointValue = twohundreda2.pointValue
            questionAnswer(twohundreda2.questionindex)
            break
        case "400-2a":
            boxID = fourhundreda2.boxID
            currentQuestionindex = fourhundreda2.questionindex
            pointValue = fourhundreda2.pointValue
            questionAnswer(fourhundreda2.questionindex)
            break
        case "600a":
            boxID = sixhundreda.boxID
            currentQuestionindex = sixhundreda.questionindex
            pointValue = sixhundreda.pointValue
            questionAnswer(sixhundreda.questionindex)
            break
        case "800a":
            boxID = eighthundreda.boxID
            currentQuestionindex = eighthundreda.questionindex
            pointValue = eighthundreda.pointValue
            questionAnswer(eighthundreda.questionindex)
            break
        case "1000a":
            boxID = onethousanda.boxID
            currentQuestionindex = onethousanda.questionindex
            pointValue = onethousanda.pointValue
            questionAnswer(onethousanda.questionindex)
            break
    }
}
function computerQuestions(id){
    switch(id){
        case "100c":
            boxID = onehundredc.boxID
            currentQuestionindex = onehundredc.questionindex
            pointValue = onehundredc.pointValue
            questionAnswer(onehundredc.questionindex)
            break
        case "200c":
            boxID = twohundredc.boxID
            currentQuestionindex = twohundredc.questionindex
            pointValue = twohundredc.pointValue
            questionAnswer(twohundredc.questionindex)
            break
        case "300c":
            boxID = threehundredc.boxID
            currentQuestionindex = threehundredc.questionindex
            pointValue = threehundredc.pointValue
            questionAnswer(threehundredc.questionindex)
            break
        case "400c":
            boxID = fourhundredc.boxID
            currentQuestionindex = fourhundredc.questionindex
            pointValue = fourhundredc.pointValue
            questionAnswer(fourhundredc.questionindex)
            break
        case "500c":
            boxID = fivehundredc.boxID
            currentQuestionindex = fivehundredc.questionindex
            pointValue = fivehundredc.pointValue
            questionAnswer(fivehundredc.questionindex)
            break
        case "200-2c":
            boxID = twohundredc2.boxID
            currentQuestionindex = twohundredc2.questionindex
            pointValue = twohundredc2.pointValue
            questionAnswer(twohundredc2.questionindex)
            break
        case "400-2c":
            boxID = fourhundredc2.boxID
            currentQuestionindex = fourhundredc2.questionindex
            pointValue = fourhundredc2.pointValue
            questionAnswer(fourhundredc2.questionindex)
            break
        case "600c":
            boxID = sixhundredc.boxID
            currentQuestionindex = sixhundredc.questionindex
            pointValue = sixhundredc.pointValue
            questionAnswer(sixhundredc.questionindex)
            break
        case "800c":
            boxID = eighthundredc.boxID
            currentQuestionindex = eighthundredc.questionindex
            pointValue = eighthundredc.pointValue
            questionAnswer(eighthundredc.questionindex)
            break
        case "1000c":
            boxID = onethousandc.boxID
            currentQuestionindex = onethousandc.questionindex
            pointValue = onethousandc.pointValue
            questionAnswer(onethousandc.questionindex)
            break
    }
}
function mythologyQuestions(id){
    switch(id){
        case "100m":
            boxID = onehundredm.boxID
            currentQuestionindex = onehundredm.questionindex
            pointValue = onehundredm.pointValue
            questionAnswer(onehundredm.questionindex)
            break
        case "200m":
            boxID = twohundredm.boxID
            currentQuestionindex = twohundredm.questionindex
            pointValue = twohundredm.pointValue
            questionAnswer(twohundredm.questionindex)
            break
        case "300m":
            boxID = threehundredm.boxID
            currentQuestionindex = threehundredm.questionindex
            pointValue = threehundredm.pointValue
            questionAnswer(threehundredm.questionindex)
            break
        case "400m":
            boxID = fourhundredm.boxID
            currentQuestionindex = fourhundredm.questionindex
            pointValue = fourhundredm.pointValue
            questionAnswer(fourhundredm.questionindex)
            break
        case "500m":
            boxID = fivehundredm.boxID
            currentQuestionindex = fivehundredm.questionindex
            pointValue = fivehundredm.pointValue
            questionAnswer(fivehundredm.questionindex)
            break
        case "200-2m":
            boxID = twohundredm2.boxID
            currentQuestionindex = twohundredm2.questionindex
            pointValue = twohundredm2.pointValue
            questionAnswer(twohundredm2.questionindex)
            break
        case "400-2m":
            boxID = fourhundredm2.boxID
            currentQuestionindex = fourhundredm2.questionindex
            pointValue = fourhundredm2.pointValue
            questionAnswer(fourhundredm2.questionindex)
            break
        case "600m":
            boxID = sixhundredm.boxID
            currentQuestionindex = sixhundredm.questionindex
            pointValue = sixhundredm.pointValue
            questionAnswer(sixhundredm.questionindex)
            break
        case "800m":
            boxID = eighthundredm.boxID
            currentQuestionindex = eighthundredm.questionindex
            pointValue = eighthundredm.pointValue
            questionAnswer(eighthundredm.questionindex)
            break
        case "1000m":
            boxID = onethousandm.boxID
            currentQuestionindex = onethousandm.questionindex
            pointValue = onethousandm.pointValue
            questionAnswer(onethousandm.questionindex)
            break
    }
}
function historyQuestions(id){
    switch(id){
        case "100h":
            boxID = onehundredh.boxID
            currentQuestionindex = onehundredh.questionindex
            pointValue = onehundredh.pointValue
            questionAnswer(onehundredh.questionindex)
            break
        case "200h":
            boxID = twohundredh.boxID
            currentQuestionindex = twohundredh.questionindex
            pointValue = twohundredh.pointValue
            questionAnswer(twohundredh.questionindex)
            break
        case "300h":
            boxID = threehundredh.boxID
            currentQuestionindex = threehundredh.questionindex
            pointValue = threehundredh.pointValue
            questionAnswer(threehundredh.questionindex)
            break
        case "400h":
            boxID = fourhundredh.boxID
            currentQuestionindex = fourhundredh.questionindex
            pointValue = fourhundredh.pointValue
            questionAnswer(fourhundredh.questionindex)
            break
        case "500h":
            boxID = fivehundredh.boxID
            currentQuestionindex = fivehundredh.questionindex
            pointValue = fivehundredh.pointValue
            questionAnswer(fivehundredh.questionindex)
            break
        case "200-2h":
            boxID = twohundredh2.boxID
            currentQuestionindex = twohundredh2.questionindex
            pointValue = twohundredh2.pointValue
            questionAnswer(twohundredh2.questionindex)
            break
        case "400-2h":
            boxID = fourhundredh2.boxID
            currentQuestionindex = fourhundredh2.questionindex
            pointValue = fourhundredh2.pointValue
            questionAnswer(fourhundredh2.questionindex)
            break
        case "600h":
            boxID = sixhundredh.boxID
            currentQuestionindex = sixhundredh.questionindex
            pointValue = sixhundredh.pointValue
            questionAnswer(sixhundredh.questionindex)
            break
        case "800h":
            boxID = eighthundredh.boxID
            currentQuestionindex = eighthundredh.questionindex
            pointValue = eighthundredh.pointValue
            questionAnswer(eighthundredh.questionindex)
            break
        case "1000h":
            boxID = onethousandh.boxID
            currentQuestionindex = onethousandh.questionindex
            pointValue = onethousandh.pointValue
            questionAnswer(onethousandh.questionindex)
            break
    }
}
function generalQuestions(id){
    switch(id){
        case "100g":
            boxID = onehundredg.boxID
            currentQuestionindex = onehundredg.questionindex
            pointValue = onehundredg.pointValue
            questionAnswer(onehundredg.questionindex)
            break
        case "200g":
            boxID = twohundredg.boxID
            currentQuestionindex = twohundredg.questionindex
            pointValue = twohundredg.pointValue
            questionAnswer(twohundredg.questionindex)
            break
        case "300g":
            boxID = threehundredg.boxID
            currentQuestionindex = threehundredg.questionindex
            pointValue = threehundredg.pointValue
            questionAnswer(threehundredg.questionindex)
            break
        case "400g":
            boxID = fourhundredg.boxID
            currentQuestionindex = fourhundredg.questionindex
            pointValue = fourhundredg.pointValue
            questionAnswer(fourhundredg.questionindex)
            break
        case "500g":
            boxID = fivehundredg.boxID
            currentQuestionindex = fivehundredg.questionindex
            pointValue = fivehundredg.pointValue
            questionAnswer(fivehundredg.questionindex)
            break
        case "200-2g":
            boxID = twohundredg2.boxID
            currentQuestionindex = twohundredg2.questionindex
            pointValue = twohundredg2.pointValue
            questionAnswer(twohundredg2.questionindex)
            break
        case "400-2g":
            boxID = fourhundredg2.boxID
            currentQuestionindex = fourhundredg2.questionindex
            pointValue = fourhundredg2.pointValue
            questionAnswer(fourhundredg2.questionindex)
            break
        case "600g":
            boxID = sixhundredg.boxID
            currentQuestionindex = sixhundredg.questionindex
            pointValue = sixhundredg.pointValue
            questionAnswer(sixhundredg.questionindex)
            break
        case "800g":
            boxID = eighthundredg.boxID
            currentQuestionindex = eighthundredg.questionindex
            pointValue = eighthundredg.pointValue
            questionAnswer(eighthundredg.questionindex)
            break
        case "1000g":
            boxID = onethousandg.boxID
            currentQuestionindex = onethousandg.questionindex
            pointValue = onethousandg.pointValue
            questionAnswer(onethousandg.questionindex)
            break
    }
}

// Pass Button - once someone clicks "Pass", the playerturn is changed. 

roundPass.addEventListener("click", () => {
    if (player === "playerone"){
        player = "playertwo"
        playerTurn.innerText = "Player Two's Turn!"
    } else {
        player = "playerone"
        playerTurn.innerText = "Player One's Turn!"
         
    }
    
})

// Answer Button --> event listener that prompots the answerchecking function.
roundGuess.addEventListener("click", answerChecker)


// Answer Checker 

function answerChecker(){ // Evaluates whether the answer in the input answer area matches the question's answer
    let playerAnswer = inputBox.value
        if (player === "playerone"){ // If else evaluating which player is going - used to ensure the correct point distribution.
            playerAnswer === currentQuestionindex.answer // playerAnswer (input) compared to answer of the Question.
            ?
            (scorePlayerOne = scorePlayerOne + pointValue, // if the answer is correct, the score is applied and a quick scoreCheck function is ran to keep track of who is leading and when to move to the next round. 
            playerOneScore.innerText = scorePlayerOne,
            scoreCheck(scorePlayerOne),
            boxText.innerText = "" , // the input answer box and the grid box are cleared if a correct answer is made. 
            inputBox.value = "" 
            )
            :
            (
            scorePlayerOne = scorePlayerOne - pointValue , // if the answer is incorrect, the point value is subtracted from the players score, the player changes to playertwo and the input answer box is cleared. 
            playerOneScore.innerText = scorePlayerOne,
            player = "playertwo", 
            playerTurn.innerText = "Player Two's turn!", 
            inputBox.value = ""
            )
        } else {
            playerAnswer === currentQuestionindex.answer // this follows the same rationale as playerone.
            ?
            (scorePlayerTwo = scorePlayerTwo + pointValue ,  
            playerTwoScore.innerText = scorePlayerTwo,
            scoreCheck(scorePlayerTwo),
            boxText.innerText = "" ,
            inputBox.value = ""
            )
            :
            (
            scorePlayerTwo = scorePlayerTwo - pointValue , 
            playerTwoScore.innerText = scorePlayerTwo,
            boxText.innerText = pointValue,
            player = "playerone",
            playerTurn.innerText = "Player One's turn!",
            inputBox.value = "",
            boxText.innerText = pointValue // if both players are incorrect, the grid value returns to the point value. Allowing the user to choose a different question.
            )
        }
    }
}

function scoreCheck (score){ // check for function that evaluates if the player is past a point threshold.
    if (score >= 400){
        alert("Onto the Final Round!") 
        roundLink.disabled = false // the roundlink is enabled upon completion, while the round guess/pass are then disabled to prompt the player to hit the link. 
        roundGuess.disabled = true 
        roundPass.disabled = true
    } else if (score >=200 & score <299){ // the bracket is designed to ensure that players do not constantly hit the alert every round. 
        alert("Onto Round 2!")
        roundGuess.disabled = true 
        roundPass.disabled = true 
        roundLink.disabled = false
    } 
}


start()
