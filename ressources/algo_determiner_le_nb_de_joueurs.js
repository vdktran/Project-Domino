// Faire apparaitre le choix des noms, avec quelques transitions
var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];



var playernames = document.getElementsByClassName("usernameinput");
var arraypn = [...playernames];


// username function, get the value of the username input
function getusername(i) {
    var u = arraypn[i].value;
    return u;
};
console.log(getusername(0));
console.log(arraypn[2].value);

// Creating Players as objects
function Player(order, username, nbdominoes) {

    this.order = order;
    this.username = username;
    this.nbdominoes = nbdominoes;
};

// Each player is a prototype of the Player object above. cf prototypage et pseudoclassical instanciation: https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b
var player1 = new Player(1, getusername(0), 6);
var player2 = new Player(2, getusername(1), 6);
var player3 = new Player(3, getusername(2), 6);
var player4 = new Player(4, getusername(3), 6);
console.log(player1.username);

// Create an array of the players
var arrayplayers = [player1, player2, player3, player4];

var nbofplayers;

