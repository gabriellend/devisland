const R = "r";
const S = "s";
const P = "p";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const PLAYER_WINS = "player wins";
const COMPUTER_WINS = "computer wins";
const TIE = "tie";
const START_ROUND_MESSAGE = "Rock, paper, or scissors? Enter r, p, or s.";
const PLAY_AGAIN_MESSAGE = "Refresh the page to play again!";

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
};

const getPlayerChoice = () => {
  let choice = prompt(START_ROUND_MESSAGE).toLowerCase();
  // Game canceled
  if (choice === null) {
    return;
  }

  while (choice !== R && choice !== S && choice !== P) {
    choice = prompt(START_ROUND_MESSAGE).toLowerCase();
    // Game canceled
    if (choice === null) {
      return;
    }
  }

  return convertChoiceToWord(choice);
};

const duel = (playerSelection, computerSelection) => {
  const playerWins =
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER);
  const computerWins =
    (computerSelection === ROCK && playerSelection === SCISSORS) ||
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === SCISSORS && playerSelection === PAPER);

  if (playerWins) {
    return PLAYER;
  } else if (computerWins) {
    return COMPUTER;
  } else {
    return "No winner";
  }
};

const playRound = (playerSelection, computerSelection) => {
  // edges cases
  let winner = duel(playerSelection, computerSelection);

  if (winner === PLAYER) {
    console.log(
      `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`
    );
    return PLAYER_WINS;
  } else if (winner === COMPUTER) {
    console.log(
      `You lose! ${capitalize(computerSelection)} beats ${playerSelection}!`
    );
    return COMPUTER_WINS;
  } else {
    console.log(
      `${capitalize(computerSelection)} and ${playerSelection}! It's a tie!`
    );
    return TIE;
  }
};

const convertChoiceToWord = (choice) => {
  switch (choice) {
    case R:
      return ROCK;
    case S:
      return SCISSORS;
    case P:
      return PAPER;
  }
};

const capitalize = (string) => {
  let titleCase =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return titleCase;
};

const logStats = (playerWins, computerWins, ties) => {
  console.log("Stats:");
  console.log(`You won ${playerWins} time${playerWins === 1 ? "" : "s"}.`);
  console.log(`You lost ${computerWins} time${computerWins === 1 ? "" : "s"}.`);
  console.log(`You tied ${ties} time${ties === 1 ? "" : "s"}.`);
};

const game = () => {
  let round = 1;
  let computerWins = 0;
  let playerWins = 0;
  let ties = 0;

  while (round <= 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let outcome = playRound(playerChoice, computerChoice);

    switch (outcome) {
      case PLAYER_WINS:
        playerWins++;
        break;
      case COMPUTER_WINS:
        computerWins++;
        break;
      default:
        ties++;
    }

    round++;
  }

  if (computerWins > playerWins) {
    console.log("-----------------");
    console.log(`Sorry, the computer wins! ${PLAY_AGAIN_MESSAGE}`);
    logStats(playerWins, computerWins, ties);
  } else if (playerWins > computerWins) {
    console.log("-----------------");
    console.log(`Congratulations, you win! ${PLAY_AGAIN_MESSAGE}`);
    logStats(playerWins, computerWins, ties);
  } else {
    console.log("-----------------");
    console.log(`It's a tie! ${PLAY_AGAIN_MESSAGE}`);
    logStats(playerWins, computerWins, ties);
  }
};

game();
