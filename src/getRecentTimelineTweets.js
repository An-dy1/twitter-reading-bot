const { TwitterClient } = require('twitter-api-client');
const input = require('readline-sync');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function getRecentTweetsByUser() {
  twitterClient.tweets
    .statusesUserTimeline({
      //   screen_name: 'andireadswhat',
    })
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        console.log(`Recent tweets: ${response.urls}, ${response.id_str}`);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = getRecentTweetsByUser;
