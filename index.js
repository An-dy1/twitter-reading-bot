const input = require('readline-sync');
const tweetLink = require('./src/tweet-link');

validChoices = ['a', 'b'];

let xhr = new XMLHttpRequest();
let exec = require('child_process').exec;
let command = 'echo `Hello, World`';

askForTypeOfTask = () => {
  userChoice = input.question(
    `What would you like to do? \n Type A for tweet a link \n Type B for something else \n`
  );
  return userChoice;
};

isValidChoice = (userInput) => {
  if (
    userInput.length > 1 ||
    typeof userInput !== 'string' ||
    !validChoices.includes(userInput)
  ) {
    console.log(`invalid choice`);
    return false;
  } else {
    console.log(`valid choice`);
    return true;
  }
};

runProgram = () => {
  userChoice = askForTypeOfTask().toLowerCase();

  while (!isValidChoice(userChoice)) {
    userChoice = askForTypeOfTask().toLowerCase();
  }

  if (userChoice === 'a') {
    tweetLink();
  } else {
    console.log(`picked something else`);
  }
};

runProgram();
