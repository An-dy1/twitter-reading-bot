const input = require('readline-sync');
const tweetLink = require('./src/tweet-link');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(`Hello, World`))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

validChoices = ['a', 'b'];

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

// runProgram();

// note: this is not being called anywhere in this program at the moment
// see readme for more
// let xhr = new XMLHttpRequest();
let exec = require('child_process').exec;
let asciiArt =
  'curl -s "http://artscene.textfiles.com/vt100/xmas-02.vt" | pv -q -L 3600';
makeAsciiArt = () => {
  child = exec(asciiArt, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
};
