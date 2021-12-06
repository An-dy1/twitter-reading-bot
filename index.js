const input = require('readline-sync');
const tweetLink = require('./src/tweet-link');

function runProgram() {
  userChoice = input.question(
    `What would you like to do? \n Type A for tweet a link \n Type B for something else \n`
  );
  if (userChoice.toLowerCase() === 'a') {
    tweetLink();
  } else {
    console.log(`picked something else`);
  }
}

runProgram();
