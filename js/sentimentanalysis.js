


=============

var table;
var afinn = {};

function preload(){
 table = loadTable('AFINN-111.txt','tsv');
}

function setup() {
// console.log(table);
for (var i = 0 ; i < table.getRowCount() ; i++){
    var row = table.getRow(i);
    //console.log(row);
    var word = row.get(0);
    var score = row.get(1);

    //console.log(word + "  "+ score);
    afinn[word] = score ;
  }
  console.log(afinn);

  save(afinn,'afinn111.json');

}

function draw() {
  // put drawing code here
}
