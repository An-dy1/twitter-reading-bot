const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

seeTweets = () => {
  let tweets = twitterClient.tweets.statusesShow;
  console.log(typeof tweets);
  console.log(tweets.length);
};

module.exports = seeTweets;
