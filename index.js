let randomDiceNumber = 0;
let currentScore= 0;  
let scores = [0, 0];
let activePlayer = 0;

const dice = document.querySelector("#dice");
const roll = document.querySelector("#dicing");
const hold = document.querySelector("#addScore");
const newGame = document.querySelector("#startGame");

const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

// Roll dice
const rollDice = function () {
  randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = `<img class="dice" src="assets/Dice${randomDiceNumber}.png" alt="Dice n°${randomDiceNumber}">`;

  // current score
  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    document.querySelector(`#currentScore${activePlayer}`).textContent = currentScore;
  } else {
    changePlayer();
  }
};

// Change player
const changePlayer = function () {
  currentScore = 0;
  document.querySelector(`#currentScore${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};


const holdScore = function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score${activePlayer}`).textContent = scores[activePlayer];

  // check player score
  if (scores[activePlayer] >= 15) {
    document.getElementById(`playerName${activePlayer}`).classList.add("winner");
    document.getElementById(`playerName${activePlayer}`).innerHTML = `<h2>Gagné !!!</h2>`;
  } else {
    changePlayer();
  }
};

// New game
const replay = function () {
  document.location.reload();
};

// Listen for click events
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
newGame.addEventListener("click", replay, false);