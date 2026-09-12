var round = 0;
var computers_choice = 0;
var players_choice = 0;
var gameOver = false;
var gameOverMessage = "";
var openingMessage = `Hello stranger! \n \nI am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS! \n\nNo one will ever stop me unless you or I win three rounds of rock-paper-scissors (yes, if I win that also counts!). \n\nGood luck, muuuuahhahhahahahahahahhahaahahahha!`;
var rulesMessage = `Hello brave human!! \n \nI managed to hack into the bad AI but I don't have much time. I can only help you with explaining the rules of rock-paper-scissors I'm not strong enough to wipe the bad AI.\n\nBoth you and the computer will pick one of the below choices:\n\t- rock\n\t- paper\n\t- or scissors.\n\nThe one who's selection trumps the other wins.\n\nRock beats scissors,\nPaper beats rock,\nand Scissors beat paper.\n\nIf your pick is identical then nothing happens the game continues without any of you getting score.\n\nI hope this helps\n\nGood luck!! `
var scores = {
  player: 0,
  computer: 0,
};
const choiceToNumber = {
  r: 0,
  p: 1,
  s: 2,
  R: 0,
  P: 1,
  S: 2,
};
const choiceNumberToString = {
  0: "rock",
  1: "paper",
  2: "scissors",
};
const standings = () => {
  if (scores.player > scores.computer) {
    const message = scores.player < 3 ? "You lead " : "You won ";
    return message + scores.player + "-" + scores.computer + ".";
  } else if (scores.player < scores.computer) {
    const message =
      scores.computer < 3 ? "The computer leads " : "Computer won ";
    return message + scores.computer + "-" + scores.player + ".";
  } else {
    return "You are tied " + scores.player + "-" + scores.player + ".";
  }
};
function game() {
  alert(openingMessage);
  alert(rulesMessage);
  while (!gameOver) {
    playRound();
  }
}
function playRound() {
  round++;
  getPlayerInput();
  if (!gameOver) {
    computerPlay();
    displayRoundOutcome();
    if (!checkWinner()) {
      return;
    }
  }
  alert(gameOverMessage);
}
function getPlayerInput() {
  const playerInput = prompt(
    `Round ${round}\n\nWhat's your choice? \n\nType 'r' for rock\nType 'p' for paper\nType 's' for scissors`,
  );
  if (playerInput == null) {
    gameOver = true;
    gameOverMessage =
      "Game over\n\nYou doomed the world , I'll take over every single computer in the world!!\n\n\nHAHAHAHAHAHHAAH";
    return;
  }

  if (!["p", "r", "s", "P", "R", "S"].includes(playerInput)) {
    alert(
      `Please use only the letters provided.\n\n('r' for rock,'p' for paper,'s' for scissors)`,
    );
    getPlayerInput();
  } else {
    players_choice = choiceToNumber[playerInput].trim();
  }
}

function computerPlay() {
  computers_choice = Math.floor(Math.random() * 3);
}

function displayRoundOutcome() {
  let message = "";
  if (computers_choice == players_choice) {
    alert(
      `You both picked ${choiceNumberToString[computers_choice]}! Nothing changed.\n\n${standings()}`,
    );
    return;
  } else if (
    computers_choice == players_choice - 1 ||
    computers_choice == players_choice + 2
  ) {
    scores.player++;
    message = `${roundOutcomeMessage(choiceNumberToString[players_choice], choiceNumberToString[computers_choice])} You won this round. `;
  } else {
    scores.computer++;
    message = `${roundOutcomeMessage(choiceNumberToString[computers_choice], choiceNumberToString[players_choice])} The computer won this round.`;
  }
  alert(
    `The computer's choice was ${choiceNumberToString[computers_choice]}.\n\n${message}\n\n${standings()}`,
  );
  return;
}
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function roundOutcomeMessage(winningChoice, losingChoice) {
  return `${capitalize(winningChoice)} beats ${losingChoice}.`;
}
function checkWinner() {
  if (scores.player > 2) {
    gameOver = true;
    gameOverMessage =
      "Congratulations!! \n\nYou defeated me by winning 3 rounds! \n\nExcellent work!";
    return true;
  } else if (scores.computer > 2) {
    gameOver = true;
    gameOverMessage =
      "Congratulations!! \n\nYou let me win to save the world!\n\nYou're a grand strategist!";
    return true;
  } else {
    return false;
  }
}

game();
