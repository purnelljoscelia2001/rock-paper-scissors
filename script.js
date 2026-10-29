// save form in DOM and add eventlistener
const form = document.querySelector("#form");
// add form boilerplate
function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

    const dataObject = Object.fromEntries(data.entries());
    // save user choice into a variable
    let userChoice = dataObject.choice;
  
  const gameResults = playGame(userChoice);
  console.log("this is the game??", gameResults);
    
  form.reset();
}

form.addEventListener("submit", onFormSubmit);


// setComputer function
// apply Math.random to computerChoice variable


const choices = ["rock", "paper", "scissors"];


const getComputerChoice = (choice) => choice[Math.floor(Math.random() * choice.length)];



// playGame function
// if/else statements
// compare user choice variable and computerChoice variables
// use return for the results in the console
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice(choices);
  console.log(`Your choice is: ${userChoice}`);
  console.log(`The computer's choice is: ${computerChoice}`)
  if (userChoice === computerChoice) {
    return `TIE! Play Again!`;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return `Computer Wins!`;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return `You Win!`;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    return `Computer Wins!`;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    return `You Win!`;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return `You Win!`;
  } else {
    return `Computer Wins!`;
  }

}