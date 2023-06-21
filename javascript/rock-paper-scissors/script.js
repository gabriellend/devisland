// We need to player rock paper scissors five times
// At the end we need to report a winner
// rock, paper, scissors
// handle winning, losing, and tieing

// IOCE
// I - input(s) – What is going into the function? i.e. What are the arguments? What types are they?
// O - output - What's coming out of the function? i.e. What is the function returning? What is the type?
// C - constraints – limitations, i.e. memory, scalability, etc.
// E – Edge cases - unexpected inputs, error handling, etc.

// I - none
// O - return one of three strings – "Rock", "Paper", or "Scissors"
// C – skip
// E – none

const getComputerChoice = () => {
  const randNum = Math.ceil(Math.random() * 3);

  //   if (randNum === 1) {
  //     return "Rock";
  //   } else if (randNum === 2) {
  //     return "Scissors";
  //   } else {
  //     return "Paper";
  //   }

  switch (randNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
    default:
      return "Scissors";
  }
};

let computerChoice = getComputerChoice();
console.log({ computerChoice });
