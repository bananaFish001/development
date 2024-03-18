// Import the readline module
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter their name
rl.question("What's your name? ", function(userName) {
  // Check if the user entered a name
  if (userName) {
    // If the user entered a name, greet them
    console.log("Hello, " + userName + "! Welcome to the JavaScript world!");
  } else {
    // If the user didn't enter a name, provide a generic greeting
    console.log("Hello, there! Welcome to the JavaScript world!");
  }

  // Close the readline interface
  rl.close();
});
