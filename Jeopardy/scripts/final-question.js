//! Import of placeholder Questions

import placeholderQuestions from './placeholder-questions.js'
let finalCategory = placeholderQuestions.filter((question) => question.category === "Final")

//! Import of previous Screen Data

let params = new URLSearchParams(document.location.search)
let currentPlayer = params.get("currentPlayer")
let playerScoreOne = params.get("playerOneScore")
let playerScoreTwo = params.get("playerTwoScore")

// ! Element ID's from webpage
let finalCategoryShownArea = document.getElementById("final-category") // final question area
let finalQuestionShownArea = document.getElementById("final-question")
let playerOneScoreArea = document.getElementById("player-one-score") // score areas 
let playerTwoScoreArea = document.getElementById("player-two-score")
let finalBetArea = document.getElementById("finalbetbox") // bet and answer inputs 
let finalInputArea = document.getElementById("finalinputbox")
let betButton = document.getElementById("bet-button") // bet and winner buttons 
let winnerButton = document.getElementById("winner-button")

// ! Variables 
let finalAnswer = finalCategory[0].answer // based on the finalcategory index 
let finalQuestion = finalCategory[0].question
let categoryFinal = finalCategory[0].category
let playerOneBet = ""
let playerTwoBet = ""


//! Inner Text Changes 
finalCategoryShownArea.innerText = categoryFinal // changes empty box in the center. 
playerOneScoreArea.innerText = playerScoreOne
playerTwoScoreArea.innerText = playerScoreTwo

//! Event Listeners 

finalQuestionShownArea.addEventListener("click", (e) =>{
    finalQuestionShownArea.innerText = finalQuestion
})


//! Functions 

function betting(){ // Used to set point values based on "input bet here field"
    if (currentPlayer === "playerone"){
        betButton.addEventListener("click",(e)=>{ // Execution based on the betbutton field
            playerOneBet = finalBetArea.value
            alert(`Player One bet ${playerOneBet} points`) // An alert is being used to indicate that Player One placed a bet
            currentPlayer = "playertwo" // A switch to playertwo to trigger the else statement.
            
        })
    } else {
        betButton.addEventListener("click",(e) =>{
        playerTwoBet = finalBetArea.value
        alert(`Player Two bet ${playerTwoBet} points`)
        currentPlayer = "playerone"
    })
}  
}
function answer(){ // Used to establish whether the player input the correct answer, and then apply the the bet value to the current point value.
    if (currentPlayer === "playerone"){ 
        betButton.addEventListener("click",(e)=>{ // Uses the same button as betting function
            if (finalAnswer === finalInputArea.value){ // If the player input matches the final answer, then the player bet is added to the score. If this fails then the bet is subtracted from the score.
                playerScoreOne = playerScoreOne + playerOneBet
                alert("Player One was correct!")
            } else {
                playerScoreOne = playerScoreOne - playerOneBet
                alert("Player One was wrong!")
            }
            currentPlayer = "playertwo" // A switch to player two is performed once player one has completed answering. 
        })
    } else { // Else statement represents player two.
        betButton.addEventListener("click",(e)=>{
            if (finalAnswer === finalInputArea.value){
                playerScoreTwo = playerScoreTwo + playerTwoBet
                alert("Player Two was correct!")
            } else {
                playerScoreTwo = playerScoreTwo - playerTwoBet
                alert("Player Two was wrong!")
            }
        })
    }
}
function winner(){ // Click winner to evaluate scores, and indicate the winner.
    winnerButton.addEventListener("click",(e)=>{
    if (playerScoreOne = playerScoreTwo){
        alert("The game is a tie!")
    } else if (playerScoreOne > playerScoreTwo){
        alert("Player One Wins!")
    } else {
        alert ("Player Two Wins!")
    }
})
}
betting()
answer()
winner()