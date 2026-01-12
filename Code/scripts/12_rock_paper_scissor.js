let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

// Explain me this code from line 10 - 25
let is_playing = false;
let intervalId;

function autoPlay() {
  //CODE HERE
  if (!is_playing) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    is_playing = true;
  } else {
    clearInterval(intervalId);
    is_playing = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = " ";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  // document.querySelector(
  //   ".js-score"
  // ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-moves").innerHTML = `You
      <img src="images/${playerMove}-emoji.png" alt="${playerMove}-emoji" class="move-img" />

      <img src="images/${computerMove}-emoji.png" alt="${computerMove}-emoji" class="move-img" />

      Computer`;

  //   alert(`You picked ${playerMove}. Computer picked ${computerMove} ,  ${result}.
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `);
  //   console.log(result);
  //
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerChoice = " ";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    console.log(`Computer choose Rock`);
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    console.log(`Computer choose Paper`);
    computerChoice = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    console.log(`Computer choose Scissor`);
    computerChoice = "scissors";
  }
  return computerChoice;
}
