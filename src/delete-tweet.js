const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

deleteTweet = (id) => {
  twitterClient.tweets
    .statusesDestroyById(id)
    .then((response) => {
      console.log(`Successfully deleted: ${response.text}`);
    })
    .catch((err) => {
      console.error(err);
    });

  //   twitterClient.tweets
  //     .statusesUpdate({
  //       status: tweet,
  //     })
  //     .then((response) => {
  //       console.log(`Successfully tweeted - ${response.text}`);
  //       // todo: stopped here
  //       console.log(`id: ${response.id}`);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
};

module.exports = deleteTweet;