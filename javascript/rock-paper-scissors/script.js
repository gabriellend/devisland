const R = "r";
const S = "s";
const P = "p";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER_WINS = "Player wins";
const COMPUTER_WINS = "Computer wins";
const TIE = "Tie";
const START_ROUND_MESSAGE = "Rock, paper, or scissors? Enter r, p, or s.";
const PLAY_AGAIN_MESSAGE = "Refresh the page to play again!";

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const randomIndex =
    Math.floor(Math.random() * choices.length) % choices.length; // This ensures the randomIndex will be 0, 1, or 2

  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  // edges cases
  const playerWins =
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER);
  const computerWins =
    (computerSelection === ROCK && playerSelection === SCISSORS) ||
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === SCISSORS && playerSelection === PAPER);

  if (playerWins) {
    console.log(
      `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`
    );
    return PLAYER_WINS;
  } else if (computerWins) {
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
  // e.g. ${playerWins === 0 || playerWins > 1 ? "s" : ""} adds an "s" to the
  // end of the word "time" if the number requires it
  console.log("Stats:");
  console.log(
    `You won ${playerWins} time${
      playerWins === 0 || playerWins > 1 ? "s" : ""
    }.`
  );
  console.log(
    `You lost ${computerWins} time${
      computerWins === 0 || computerWins > 1 ? "s" : ""
    }.`
  );
  console.log(`You tied ${ties} time${ties === 0 || ties > 1 ? "s" : ""}.`);
};

const game = () => {
  let round = 1;
  let computerWins = 0;
  let playerWins = 0;
  let ties = 0;

  while (round <= 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt(START_ROUND_MESSAGE);
    // Game canceled
    if (playerChoice === null) {
      return;
    }

    playerChoice = playerChoice.toLowerCase();
    while (playerChoice !== R && playerChoice !== S && playerChoice !== P) {
      playerChoice = prompt(START_ROUND_MESSAGE);
      // Game canceled
      if (playerChoice === null) {
        return;
      }
    }

    playerChoice = convertChoiceToWord(playerChoice);
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
