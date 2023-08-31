/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var imageSrc = [
  "./assets/images/dice-1.png",
  "./assets/images/dice-2.png",
  "./assets/images/dice-3.png",
  "./assets/images/dice-4.png",
  "./assets/images/dice-5.png",
  "./assets/images/dice-6.png",
];
// console.log(imageSrc);

var dice = document.querySelector("img");
var newGameBtn = document.getElementsByClassName("btn-new")[0];
var rollDiceBtn = document.getElementsByClassName("btn-roll")[0];
var holdBtn = document.getElementsByClassName("btn-hold")[0];
var player1Panel = document.getElementsByClassName("player-0-panel")[0];
var player2Panel = document.getElementsByClassName("player-1-panel")[0];

var player1Score = document.getElementsByClassName("player-score")[0];
var player2Score = document.getElementsByClassName("player-score")[1];
var player1Current = document.getElementsByClassName("player-current-score")[0];
var player2Current = document.getElementsByClassName("player-current-score")[1];
var player1 = document.getElementById("name-0");
var player2 = document.getElementById("name-1");
player1Score.textContent = "0";
player2Score.textContent = "0";
player1Current.textContent = "0";
player2Current.textContent = "0";
var selectPlayer1 = true;

newGameBtn.addEventListener("click", function () {
  player1Score.textContent = "0";
  player2Score.textContent = "0";
  player1Current.textContent = "0";
  player2Current.textContent = "0";
  dice.src = "";
  selectPlayer1 = true;
  player1Panel.classList.add("active");
  player2Panel.classList.remove("active");
  rollDiceBtn.style.display = "block";
  holdBtn.style.display = "block";
});

rollDiceBtn.addEventListener("click", function () {
  var index = Math.trunc(6 * Math.random());
  var getSrc = imageSrc[index];
  dice.src = getSrc;

  if (selectPlayer1) {
    if (index === 0) {
      selectPlayer1 = false;
      player1Score.textContent = "0";
      player1Current.textContent = "0";
      player2Panel.classList.add("active");
      player1Panel.classList.remove("active");
    } else {
      var x = index + 1;
      player1Current.textContent = Number(player1Current.textContent) + x;
      if (Number(player1Current.textContent) >= 10) {
        player1.textContent = "Winner!";
        rollDiceBtn.style.display = "none";
        holdBtn.style.display = "none";
      }
    }
  } else {
    if (index === 0) {
      player2Score.textContent = "0";
      player2Current.textContent = "0";
      player1Panel.classList.add("active");
      player2Panel.classList.remove("active");
      selectPlayer1 = true;
    } else {
      var x = index + 1;
      player2Current.textContent = Number(player2Current.textContent) + x;

      if (Number(player2Current.textContent) >= 10) {
        player2.textContent = "Winner!";

        rollDiceBtn.style.display = "none";
        holdBtn.style.display = "none";
      }
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (selectPlayer1 === true) {
    player1Score.textContent =
      Number(player1Score.textContent) + Number(player1Current.textContent);
    player1Current.textContent = "0";
    player2Panel.classList.add("active");
    player1Panel.classList.remove("active");
    selectPlayer1 = false;
  } else {
    player2Score.textContent =
      Number(player2Score.textContent) + Number(player2Current.textContent);
    player2Current.textContent = "0";
    player1Panel.classList.add("active");
    player2Panel.classList.remove("active");
    selectPlayer1 = true;
  }
});
