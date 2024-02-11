"use strict";
// so proud of ahmed ... man , u have implement the whole code by urself just using the flow-chart img .. keep going .. u will do it again  and better
// catching dom elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceImg = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let Playing = true;
// hide the dice img when game reload
diceImg.classList.add("hidden");
// create the dice randomly
let dice = Math.trunc(Math.random() * 6) + 1;
// reset 'current scores' and display them for both users
let currentScore0 = 0;
let currentScore1 = 0;
currentScore0El.textContent = currentScore0;
currentScore1El.textContent = currentScore1;
// reset  'scores' and display them for both users
let score0 = 0;
let score1 = 0;
score0El.textContent = score0;
score1El.textContent = score1;
// roll button functionality
rollBtn.addEventListener("click", function () {
  if (Playing) {
    // each click reassign the dice
    dice = Math.trunc(Math.random() * 6) + 1;
    // display the dice img
    diceImg.classList.remove("hidden");
    // get the dice img dynamically based on the current dice number that has been created
    diceImg.src = `./images/dice-${dice}.png`;
    // check the dice number
    // if it is not = 1
    if (dice != 1) {
      // we check the active player and add the dice to the current score and  display its current score
      switch (player0.classList.contains("player--active")) {
        case true:
          currentScore0 += dice;
          currentScore0El.textContent = `${currentScore0}`;
          break;
        case false:
          currentScore1 += dice;
          currentScore1El.textContent = `${currentScore1}`;
      }
      // if (player0.classList.contains = "player--active") {
      //   currentScore0 += dice;
      //   currentScore0El.textContent = `${currentScore0}`;
      // } else {
      //   currentScore1 += dice;
      //   currentScore1El.textContent = `${currentScore1}`;
      // }
    }
    // if dice = 1
    else {
      // check the active player and reset his current score to 0 and display it then switch player
      if (player0.classList.contains("player--active")) {
        currentScore0 = 0;
        currentScore0El.textContent = currentScore0;
        player0.classList.remove("player--active");
        player1.classList.add("player--active");
      } else {
        currentScore1 = 0;
        currentScore1El.textContent = currentScore0;
        player1.classList.remove("player--active");
        player0.classList.add("player--active");
      }
    }
  }
});

// hold button
holdBtn.addEventListener("click", function () {
  if (Playing) {
    // check the active player and if its player one is active
    if (player0.classList.contains("player--active")) {
      //  add the current score to his score and switch to player two
      score0 += currentScore0;
      score0El.textContent = score0;
      currentScore0 = 0;
      currentScore0El.textContent = currentScore0;
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
      // we check player one score and if its >= 100 we give him the winner class
      if (score0 >= 100) {
        player0.classList.add("player--winner");
        player0.classList.remove("player--active");
        Playing = false;
      }
    }

    // if the player 2 is the active player
    else {
      // add the current score to his score and switch to player one
      score1 += currentScore1;
      score1El.textContent = score1;
      currentScore1 = 0;
      currentScore1El.textContent = currentScore1;
      player0.classList.add("player--active");
      player1.classList.remove("player--active");
      // we check player two score and if its >= 100 we give him the winner class
      if (score1 >= 100) {
        player1.classList.add("player--winner");
        Playing = false;
      }
    }
  }
});
// new game btn
newGameBtn.addEventListener("click", function () {
  // reset and display the current score and score of both players and display that , make the player 1 the active player ,
  //hide dice img , reassign the dice to be not the same as the previous dice in the next game , remove the winner class too
  currentScore0 = 0;
  currentScore0El.textContent = currentScore0;
  currentScore1 = 0;
  currentScore1El.textContent = currentScore1;
  score0 = 0;
  score0El.textContent = score0;
  score1 = 0;
  score1El.textContent = score1;
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  Playing = true;
});
