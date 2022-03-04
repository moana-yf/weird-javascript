var Twitter = require('twitter');
 
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var params = {screen_name: 'nodejs'};

client.get(
    'search/tweets', 
    {q: 'China COVID'},
    function(error, tweets, response) {
        console.log(tweets);
    },
    params
)
