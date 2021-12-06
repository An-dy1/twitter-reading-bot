require('dotenv').config();
const { default: axios } = require('axios');
const { TwitterClient } = require('twitter-api-client');
const input = require('readline-sync');
const https = require('https');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function tweetLink() {
  let tweet;
  link = input.question('What link would you like to tweet? ');
  additionalText = input.question(
    'Enter additional tweet text. If nothing to add, press ENTER '
  );

  if (additionalText) {
    tweet = `${additionalText} ${link}`;
  } else {
    tweet = link;
  }

  twitterClient.tweets
    .statusesUpdate({
      status: tweet,
    })
    .then((response) => {
      console.log(`Successfully tweeted - ${response.text}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = tweetLink;

// axios
//   .get('http://history.muffinlabs.com/date')
//   .then((response) => {
//     const data = response.data.data ? response.data.data : {};
//     let tweet;
//     if (data.Events && data.Events.length) {
//       // tweet the first event in the array
//       tweet = `Year ${data.Events[2].year}: ${data.Events[2].text}`;
//     } else {
//       tweet = `Boring day, I guess`;
//     }

//     twitterClient.tweets
//       .statusesUpdate({
//         status: tweet,
//       })
//       .then((response) => {
//         console.log(`Successfully tweeted - ${response.text}`);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     // TODO: send
//   })
//   .catch((err) => {
//     console.error(err);
//   });