const { TwitterClient } = require('twitter-api-client');
const input = require('readline-sync');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function usersLookup() {

  twitterClient.accountsAndUsers.usersLookup({
    screen_name: 'andireadswhat'
  }).then((response) => {
    // these are all printing out undefined :/
    for (let i = 0; i < response.length; i++) {
      console.log(`User's id is: ${response[i].id}`);
    }
  })
  .catch((err) => {
    console.error(err);
  });
    // todo: users show
}

module.exports = usersLookup;
