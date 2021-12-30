const { TwitterClient } = require('twitter-api-client');
const input = require('readline-sync');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

deleteTweet = () => {
  let deleteId = input.question(
    `What is the id of the tweet you would like to delete? `
  );

  twitterClient.tweets
    .statusesDestroyById(`1476644969544925200`)
    .then((response) => {
      console.log(`Successfully deleted: ${response.text}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = deleteTweet;
