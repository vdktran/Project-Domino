var order;
var nbdominoes;

var player1html = document.getElementById("box1");
var player2html = document.getElementById("box2");
var player3html = document.getElementById("box3");
var player4html = document.getElementById("box4");

var player1 = new Player(order, getusername(0), arrayplayer1, player1html);
var player2 = new Player(order, getusername(1), arrayplayer2, player2html);
var player3 = new Player(order, getusername(2), arrayplayer3, player3html);
var player4 = new Player(order, getusername(3), arrayplayer4, player4html);

var arrayplayers = [player1, player2, player3, player4];

var nbofplayers;

//getElementsByClassName returns a Nodelist
var dominoes = document.getElementsByClassName("domino");

// Turn a Nodelist into an Array, works on modern browsers
var arraydom = [...dominoes];

// // Each domino is a prototype of the Domino object above.
// var domino00 = new Domino(0, 0, gettop(0), getleft(0), getdirection(0));
// var domino01 = new Domino(0, 1, gettop(1), getleft(1), getdirection(1));
// var domino02 = new Domino(0, 2, gettop(2), getleft(2), getdirection(2));
// var domino03 = new Domino(0, 3, gettop(3), getleft(3), getdirection(3));
// var domino04 = new Domino(0, 4, gettop(4), getleft(4), getdirection(4));
// var domino05 = new Domino(0, 5, gettop(5), getleft(5), getdirection(5));
// var domino06 = new Domino(0, 6, gettop(6), getleft(6), getdirection(6));
// var domino11 = new Domino(1, 1, gettop(7), getleft(7), getdirection(7));
// var domino12 = new Domino(1, 2, gettop(8), getleft(8), getdirection(8));
// var domino13 = new Domino(1, 3, gettop(9), getleft(9), getdirection(9));
// var domino14 = new Domino(1, 4, gettop(10), getleft(10), getdirection(10));
// var domino15 = new Domino(1, 5, gettop(11), getleft(11), getdirection(11));
// var domino16 = new Domino(1, 6, gettop(12), getleft(12), getdirection(12));
// var domino22 = new Domino(2, 2, gettop(13), getleft(13), getdirection(13));
// var domino23 = new Domino(2, 3, gettop(14), getleft(14), getdirection(14));
// var domino24 = new Domino(2, 4, gettop(15), getleft(15), getdirection(15));
// var domino25 = new Domino(2, 5, gettop(16), getleft(16), getdirection(16));
// var domino26 = new Domino(2, 6, gettop(17), getleft(17), getdirection(17));
// var domino33 = new Domino(3, 3, gettop(18), getleft(18), getdirection(18));
// var domino34 = new Domino(3, 4, gettop(19), getleft(19), getdirection(19));
// var domino35 = new Domino(3, 5, gettop(20), getleft(20), getdirection(20));
// var domino36 = new Domino(3, 6, gettop(21), getleft(21), getdirection(21));
// var domino44 = new Domino(4, 4, gettop(22), getleft(22), getdirection(22));
// var domino45 = new Domino(4, 5, gettop(23), getleft(23), getdirection(23));
// var domino46 = new Domino(4, 6, gettop(24), getleft(24), getdirection(24));
// var domino55 = new Domino(5, 5, gettop(25), getleft(25), getdirection(25));
// var domino56 = new Domino(5, 6, gettop(26), getleft(26), getdirection(26));
// var domino66 = new Domino(6, 6, gettop(27), getleft(27), getdirection(27));

// Each domino is a prototype of the Domino object above.
var domino00 = new Domino(0, 0, domino00html);
var domino01 = new Domino(0, 1, domino01html);
var domino02 = new Domino(0, 2, domino02html);
// var domino03 = new Domino(0, 3, domino03html);
// var domino04 = new Domino(0, 4, domino04html);
// var domino05 = new Domino(0, 5, domino05html);
// var domino06 = new Domino(0, 6, domino06html);
// var domino11 = new Domino(1, 1, domino11html);
// var domino12 = new Domino(1, 2, domino12html);
// var domino13 = new Domino(1, 3, domino13html);
// var domino14 = new Domino(1, 4, domino14html);
// var domino15 = new Domino(1, 5, domino15html);
// var domino16 = new Domino(1, 6, domino16html);
// var domino22 = new Domino(2, 2, domino22html);
// var domino23 = new Domino(2, 3, domino23html);
// var domino24 = new Domino(2, 4, domino24html);
// var domino25 = new Domino(2, 5, domino25html);
// var domino26 = new Domino(2, 6, domino26html);
// var domino33 = new Domino(3, 3, domino33html);
// var domino34 = new Domino(3, 4, domino34html);
// var domino35 = new Domino(3, 5, domino35html);
// var domino36 = new Domino(3, 6, domino36html);
// var domino44 = new Domino(4, 4, domino44html);
// var domino45 = new Domino(4, 5, domino45html);
// var domino46 = new Domino(4, 6, domino46html);
// var domino55 = new Domino(5, 5, domino55html);
// var domino56 = new Domino(5, 6, domino56html);
// var domino66 = new Domino(6, 6, domino66html);

var domino00html = document.createElement("img");
domino00html.src = "Dominos images/[0,0].png";
domino00html.className = "domino";
domino00html.name = "domino01";

var domino01html = document.createElement("img");
domino01html.src = "Dominos images/[0,1].png";
domino01html.className = "domino";
domino01html.name = "domino02";

var domino02html = document.createElement("img");
domino02html.src = "Dominos images/[0,2].png";
domino02html.className = "domino";
domino02html.name = "domino03";


// Creation of an Array of my domino objects
var dominoarray = [domino00, domino01, domino02, domino03, domino04, domino05, domino06, domino11, domino12, domino13, domino14, domino15, domino16, domino22, domino23, domino24, domino25, domino26, domino33, domino34, domino35, domino36, domino44, domino45, domino46, domino55, domino56, domino66];

// pioche random

var selectedHand1 = [];
var random = Math.floor(Math.random()*dominoarray.length);//je sélectionne un index aléatoirement par rapport à la taille du tableau
var dom = dominoarray[random];

var selectingboard = document.getElementById("boardgame");

//getElementsByClassName returns a Nodelist
var dominoes = document.getElementsByClassName("domino");

// Turn a Nodelist into an Array, works on modern browsers
var arraydom = [...dominoes];


var domino01html = document.createElement("img");
domino01html.src = "Dominos images/[0,0].png";
domino01html.className = "domino";
domino01html.name = "domino01";

var domino02html = document.createElement("img");
domino02html.src = "Dominos images/[0,1].png";
domino02html.className = "domino";
domino02html.name = "domino02";

var domino03html = document.createElement("img");
domino03html.src = "Dominos images/[0,2].png";
domino03html.className = "domino";
domino03html.name = "domino03";





var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"


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



var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];
function getplayernb() {}; //Set how many players will participate

var playernames = document.getElementsByClassName("username");
var arraypn = [...playernames];



var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];


var playernames = document.getElementsByClassName("usernameinput");
var arraypn = [...playernames];