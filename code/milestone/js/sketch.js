


var afinn;

function preload() {

  afinn = loadJSON('../afinn111.json');
}

function setup (){

 noCanvas();
  console.log(afinn);

  // txt = loadJSON('../tweets.json');
  var txt = select('#txt');
  txt.input(typing);

  function typing() {

    var textinput = txt.value();

    var words = textinput.split(/\W/);
    var scoredwords = [];
    //console.log(words);
    var score = 0 ;
    for (var i = 0 ; i < words.length ; i++){

      var word = words[i].toLowerCase();
      if(afinn.hasOwnProperty(word)) {

        score += Number(afinn[word]);
        scoredwords.push(word + ":" + score);

      }
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

    //console.log(txt.value());
  }
