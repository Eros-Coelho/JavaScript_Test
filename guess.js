const readline = require('readline'); // Import the readline module

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// generates a random number between 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let previousGuesses = [];

console.log("Welcome to JavaScript Guessing Game!");

// function to ask the user for their guess
function askQuestion() {
  rl.question("Please enter your guess: ", (userGuess) => {
    userGuess = parseInt(userGuess, 10);
    // attempts++;

    // checks if the input is a valid number
    if (isNaN(userGuess)) {
      console.log("That's not a valid number. Please try again.");
      askQuestion();
    } else if (previousGuesses.includes(userGuess)) {
      console.log("You've already tried that one. Try a different number this time, will ya?");
      askQuestion();
    }
     else {
     attempts++;
     previousGuesses.push(userGuess);

      if (userGuess === randomNum) {
        console.log(`Congratulations! You guessed the number ${randomNum} correctly in ${attempts} attempts.`);
        rl.close();
      } else if (userGuess < randomNum) {
        console.log("Nope, sorry, too low. Try higher");
        askQuestion();
      } else {
        console.log("Nope, sorry, too high. Try lower");
        askQuestion();
      }
    }
  });
}
// start game
askQuestion();
