const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// note: I thought this endpoint would return my tweets, but in fact returns all public tweets matching the parameters passed

searchForTweet = (param) => {
  twitterClient.tweets
    .search(param)
    .then((response) => {
      console.log(`Successfully deleted: ${response.text}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = searchForTweet;
