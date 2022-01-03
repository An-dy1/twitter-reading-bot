const { TwitterClient } = require('twitter-api-client');
const input = require('readline-sync');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// cannot for the life of me make this request return anything other than an empty object
// have tried:
// 1. id as a number and as a string
// 2. id as an array of strings and one single string
// 3. passing as a parameter and passing directly in this request

function lookUpTweetById() {
  twitterClient.tweets
    .statusesLookup({
      id: `20`,
      id: `1050118621198921728`,
    })
    .then((response) => {
      console.log(`Looked up tweet: ${response.data}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = lookUpTweetById;
