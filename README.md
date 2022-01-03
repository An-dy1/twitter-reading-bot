# Todo: improvements

- do Python version of this script, for practice
- instead of using the Tweet service to handle oauth, use axios or a different client to separate out the authentication steps, for learning; then, use axios to send the request to the twitter endpoint
- make a delete-tweet function
- allow a second piece of input as well: 'do you have additional text to add? '
- make a little web app that can take this input? mobile app?

# To run:

`npm start`

# Notes on using the endpoints

### Look up Tweets

### Delete tweets

Just discovered that the id that is returned in the POST status response is not the tweet's id. Rather, that is returned as `id_str`
