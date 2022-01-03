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
      console.log(`Successfully tweeted: ${response.text}`);
      console.log(
        `id: ${response.id}\nid string: ${response.id_str} \ncreated at: ${response.created_at}`
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = tweetLink;

// unused code that will retrieve an event in history on this day using an api

// axios
//   .get('http://history.muffinlabs.com/date')
//   .then((response) => {
//     const data = response.data.data ? response.data.data : {};
//     let tweet;
//     if (data.Events && data.Events.length) {
//       // tweet the first event in the array
//       tweet = `Year ${data.Events[0].year}: ${data.Events[0].text}`;
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
