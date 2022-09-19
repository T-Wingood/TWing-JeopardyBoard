// designed to allow information passes from round one to round two. 
// interested in what the score is, and then whose turn is it on the next round. 
let params = new URLSearchParams(document.location.search)
let currentPlayer = params.get("currentPlayer")
let playerScoreOne = params.get("playerOneScore")
let playerScoreTwo = params.get("playerTwoScore")



// queries 
let playerOneScore = document.getElementById("player-one-score") //player score
let playerTwoScore = document.getElementById("player-two-score")
let player = document.getElementById("player-turn") // player turn

//ensuring that the inner text is updated 
playerOneScore.innerText = playerScoreOne
playerTwoScore.innerText = playerScoreTwo

// adjusted the player turn indicater as necessary. 
if (currentPlayer === "playerone"){
    player.innerText = "Player One's Turn"
} else {player.innerText = "Player Two's Turn"
}

