function Player(order, username, nbdominoes) {

    this.order = order;
    this.username = username;
    this.nbdominoes = nbdominoes;
};

var player1 = new Player(1, getusername, 6);

function Domino(tuiletop, tuilebottom) {

    this.tuiletop = tuiletop;
    this.tuilebottom = tuilebottom;
    this.top = top;
    this.left= left;
};


var btn2j = document.getElementById("btn2j");
var btn3j = document.getElementById("btn3j");
var btn4j = document.getElementById("btn4j");
var buttonstart = document.getElementsByClassName("button-startmenu");

btn2j.addEventListener('click', function () {
    nbofplayers = 2;  
 });

btn3j.addEventListener('click', function () {
    nbofplayers = 3;  
 });

btn4j.addEventListener('click', function () {
    nbofplayers = 4;  
 });

 if (nbofplayers === 2) {
    player1.order = 1;
    player1.nbdominoes = 7;
    player2.order = 2;
    player2.nbdominoes = 7;
}

else if (nbofplayers === 3) {
    player1.order = 1;
    player1.nbdominoes = 6;
    player2.order = 2;
    player2.nbdominoes = 6;
    player3.order = 3;
    player3.nbdominoes = 6;
}

else {
    player1.order = 1;
    player1.nbdominoes = 6;
    player2.order = 2;
    player2.nbdominoes = 6;
    player3.order = 3;
    player3.nbdominoes = 6;
    player4.order = 4;
    player4.nbdominoes = 6;
};


var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];
function getplayernb() {}; //Set how many players will participate

var playernames = document.getElementsByClassName("username");
var arraypn = [...playernames];

//Give username

function getusername() {
    var u = document.arraypn[0].value;
    return u;
};

// Assign 6 or 7 dominoes to each player depending on the nb of players, assign the rest to the draw pile, randomize the process
function distribution() {}; 

// Self-explanatory
function startgame() {}; 

//Assign which Player gets to play (meaning assigning which dominoes are in the rack, using the positioning and drawdomino function
function playerswitch() {};


function positioning() {};


function drawdomino() {};




var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];


var playernames = document.getElementsByClassName("usernameinput");
var arraypn = [...playernames];
function getusername() {
    var u = arraypn[0].value;
    return u;
};
console.log(getusername());

// var btn2j = doucment.getElementById("btn2j");
// var btn3j = doucment.getElementById("btn3j");
// var btn4j = doucment.getElementById("btn4j");
// var buttonstart = document.getElementsByClassName("button-startmenu");

// buttonstart.addEventListener('click', function () { });







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













function Domino(tuiletop, tuilebottom, html, whichplayer, rackorboardornone) {

    this.tuiletop = tuiletop;
    this.tuilebottom = tuilebottom;
    this.html = html;
    this.whichplayer = whichplayer;
    this.rackorboardornone = rackorboardornone;
};

var domino00html = document.createElement("img");
domino00html.src = "Dominos images/[0,0].png";
domino00html.className = "domino";
domino00html.name = "domino00";

var domino01html = document.createElement("img");
domino01html.src = "Dominos images/[0,1].png";
domino01html.className = "domino";
domino01html.name = "domino01";

var domino02html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino02";

var domino03html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino03";

var domino04html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino04";

var domino05html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino05";

var domino06html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino06";

var domino11html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino11";


var domino00 = new Domino(0, 0, domino00html);
var domino01 = new Domino(0, 1, domino01html);
var domino02 = new Domino(0, 2, domino02html);
var domino03 = new Domino(0, 3, domino03html);
var domino04 = new Domino(0, 4, domino04html);
var domino05 = new Domino(0, 5, domino05html);
var domino06 = new Domino(0, 6, domino06html);
var domino11 = new Domino(1, 1, domino11html);



console.log(domino00html);

var dominoarray = [domino00, domino01, domino02, domino03, domino04, domino05, domino06, domino11];


//mixing the domino array
function shuffle(dominoarray) {
  let len = dominoarray.length - 1;
  let dominos = dominoarray.slice(0); //make a copy of your original array
   for  ( var i = len; i >= 0 ; i--){
        //select random index from 0 to array length
        var j = Math.floor(Math.random() * (dominos.length - 1));

        /*delete element at selected index from copy of the original array, 
        so it can't be randomly chosen again*/ 
        temp = dominos.splice(j, 1);

        //replace the element in the origin array with the randomly selected one
        dominoarray[i] = temp[0]; 
   }
};

shuffle(dominoarray);


function Player(domi) {
    this.domi = domi;
};

// Each player is a prototype of the Player object above. cf prototypage et pseudoclassical instanciation: https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b


// Create an array of the players


var arrayboard = [];
var arraypioche = [];
var arrayrack = [];
var arrayplayer1 = [];
var arrayplayer2 = [];
var arrayplayer3 = [];
var arrayplayer4 = [];



var player1 = new Player(arrayplayer1);
var player2 = new Player(arrayplayer2);
var player3 = new Player(arrayplayer3);
var player4 = new Player(arrayplayer4);

//distribution of dominos to players

// Create an array of the players
var arrayplayers = [player1, player2, player3, player4];
var nbofplayers=2;

for ( k=0 ; k < nbofplayers ; k++) {

for (j=0; j<7 ; j++) {
// domi = arrayplayer1234
  arrayplayers[k].domi.push(dominoarray[0]);
  dominoarray.splice(0, 1);
};

};
console.log(arrayplayer2);
console.log(dominoarray);

