var Twit = require("twit");

var config = require("./config");

// tweetit();
// setInterval(tweetit, 1000*20);

function  tweetit(txt) {
  var T = new Twit(config);

  var r = Math.floor(Math.random()*100);
}
var tweet = {
    status: " tweet no " + r +  "Sending this tweet from node."

  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {

      console.log("it worked!")
    }


  }
l
// }
