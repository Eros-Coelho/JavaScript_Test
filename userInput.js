const readline = require('readline'); // Import readline module

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,   // User input will come from the terminal
  output: process.stdout  // Output (prompts and responses) will go to the terminal
});

// Ask the user for their name
rl.question('What is your name? ', (name) => {
  console.log(name);  // Print the name back to the console
  rl.close();  // Close the readline interface when done
});