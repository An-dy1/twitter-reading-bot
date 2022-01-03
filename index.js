const input = require('readline-sync');
const tweetLink = require('./src/tweet-link');
const deleteTweet = require('./src/delete-tweet');
const lookUpTweet = require('./src/tweet-lookup');
const getRecentTimelineTweets = require('./src/getRecentTimelineTweets');

validChoices = ['a', 'b'];

askForTypeOfTask = () => {
  userChoice = input.question(
    `What would you like to do? \n Type A for tweet a link \n Type B to delete a tweet \n`
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
    // deleteTweet();
    // lookUpTweet();
    getRecentTimelineTweets();
  }
};

runProgram();

// note: this is not being called anywhere in this program at the moment
// see readme for more
// let xhr = new XMLHttpRequest();
let exec = require('child_process').exec;
const getRecentTweetsByUser = require('./src/getRecentTimelineTweets');
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
