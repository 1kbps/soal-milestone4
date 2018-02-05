const express = require('express')
const app = express()


var Twit = require("twit");

var config  = require("./config");

var T = new Twit(config);

var params = { q: '#hyderabad',
               count: 10

            }
T.get('search/tweets', params , gotData);

var tweets;
function gotData (err, data, response) {
  tweets = data.statuses;
  for ( var i = 0 ; i < tweets.length ; i++)
  {
    console.log(tweets[i].text);
  }
  // return tweets
}

// var afinn;
// //function preload() {
//   afinn = loadJSON('../afinn111.json');
// //}
var afinn = require('../afinn111.json');

function setup (){
  var afinn ;
  //afinn = loadJSON('../afinn111.json');
  for (var i=0 ; i < tweets.length ; i++){
    textinput = tweets[i].text;
    console.log("Rahul" , textinput);
    var words = textinput.split(/\W/);
    var scoredwords = [];
    //console.log(words);
    var score = 0 ;
    for (var i = 0 ; i < words.length ; i++){

      var word = words[i].toLowerCase();
      //console.log(word);
      if(afinn.hasOwnProperty(word) != undefined ) {

        score += Number(afinn[word]);
        scoredwords.push(word + ":" + score);

      }
      var scorep = select('#score') ;
      scorep.html('score : ' + score );
      var comp = select('#comparitive') ;
      comp.html('comparitive: ' + score / words.length );
      var wordlist = select('#wordlist') ;
      wordlist.html(scoredwords);

        //console.log(txt.value);
    }
  //  console.log(words);
  }
    //console.log(txt.value());
}

app.get('/', (req, res) => res.send(setup()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
