// Faire apparaitre le choix des noms, avec quelques transitions
var playerchoice = document.getElementsByClassName("button-startmenu");
var arraypc = [...playerchoice];



var playernames = document.getElementsByClassName("usernameinput");
var arraypn = [...playernames];


arraypc[0].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "hidden";
    document.getElementById("username3").style.opacity = 0;
    document.getElementById("username4").style.visibility = "hidden";
    document.getElementById("username4").style.opacity = 0;
    nbofplayers = 2;
});

arraypc[1].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "visible";
    document.getElementById("username3").style.opacity = 1;
    document.getElementById("username4").style.visibility = "hidden";
    document.getElementById("username4").style.opacity = 0;
    nbofplayers = 3;
});

arraypc[2].addEventListener('click', function () {
    document.getElementById("usernamecontainer").style.visibility = "visible";
    document.getElementById("usernamecontainer").style.opacity = 1;
    document.getElementById("username3").style.visibility = "visible";
    document.getElementById("username3").style.opacity = 1;
    document.getElementById("username4").style.visibility = "visible";
    document.getElementById("username4").style.opacity = 1;
    nbofplayers = 4;
});


// Faire disparaitre le menu de départ
var start = document.getElementById("startbtn");
start.addEventListener('click', function () {
    if (arraypn[0].value == "") {
        document.getElementById("player1").textContent = "Joueur 1";
    }
    else {
        document.getElementById("player1").textContent = player1.username;
    };

    if (arraypn[1].value == "") {
        document.getElementById("player2").textContent = "Joueur 2";
    }
    else {
        document.getElementById("player2").textContent = player2.username;
    };

    if (arraypn[2].value == "") {
        document.getElementById("player3").textContent = "Joueur 3";
    }
    else {
        document.getElementById("player3").textContent = player3.username;
    };

    if (arraypn[3].value == "") {
        document.getElementById("player4").textContent = "Joueur 4";
    }
    else {
        document.getElementById("player4").textContent = player4.username;
    };
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("game").style.opacity = 1;
    document.getElementById("game").style.zIndex = 15;
    document.getElementById("startmenu").style.display = "none";
});


var menubtn = document.getElementById("menubutton");
menubtn.addEventListener('click', function () {
    document.getElementById("menucontainer").style.visibility = "visible";
    document.getElementById("menucontainer").style.opacity = 1;
});

var menubtn = document.getElementById("backtogame");
menubtn.addEventListener('click', function () {
    document.getElementById("menucontainer").style.visibility = "hidden";
    document.getElementById("menucontainer").style.opacity = 0;
});



// Positionnement sur double click
for (var i = 0; i < arraydom.length; i++) {
    var self = arraydom[i];
    self.addEventListener('dblclick', function positionnement() {
        console.log("double clique est entendu");
        //Les variables ci-dessous sont censés être les positions top & left du domino par rapport auquel on veut placer notre domino
        // Possiblement comme ça : var x = document.getElementById(matchingdomino).style.left;
        //                         var y = document.getElementById(matchingdomino).style.top;
        // var leftplus1 = x +=1;
        // var topplus1 = y +=1;
        // var leftplus2 = x +=2;
        // var topplus2 = y +=2;
        // var leftplus3 = x +=3;
        // var topplus3 = y +=3;
        // var leftplus4 = x +=4;
        // var topplus4 = y +=4;
        // var leftminus1 = x -=1;
        // var topminus1 = y -=1;
        // var leftminus2 = x -=2;
        // var topminus2 = y -=2;
        // var leftminus3 = x -=3;
        // var topminus3 = y -=3;
        // var leftminus4 = x -=4;
        // var topminus4 = y -=4;


        var plus1 = 0;
        var plus1 = 0;
        var plus2 = 0;
        var plus3 = 0;
        var plus4 = 0;
        var minus1 = 0;
        var minus2 = 0;
        var minus3 = 0;
        var minus4 = 0;
        var rotplus = 0;
        var rotminus = 0;

        plus1 += 1;
        plus2 += 2;
        plus3 += 3;
        plus4 += 4;
        minus1 -= 1;
        minus2 -= 2;
        minus3 -= 3;
        minus4 -= 4;
        rotplus += 90;
        rotminus -= 90;

        var d = this.id;
        switch (d) {
            case "drefvert":
                document.getElementById(d).style.position = 'absolute';
                break;

            case "drefhori":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dA":
                document.getElementById(d).style.top = +minus4 + 'rem';
                document.getElementById(d).style.position = 'absolute';
                break;
            case "dE":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +plus4 + 'rem';
                break;
            case "dB":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +minus3 + 'rem';
                document.getElementById(d).style.left = +minus1 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
                break;
            case "dF":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +plus3 + 'rem';
                document.getElementById(d).style.left = +minus1 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
                break;
            case "dD":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +minus3 + 'rem';
                document.getElementById(d).style.left = +plus1 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dH":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +plus3 + 'rem';
                document.getElementById(d).style.left = +plus1 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dC":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +minus3 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dG":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +plus3 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dI":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +plus3 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dJ":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +minus3 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
                break;
            case "dK":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +minus4 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dL":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +plus4 + 'rem';
                document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
                break;
            case "dM":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +minus3 + 'rem';
                document.getElementById(d).style.top = +minus1 + 'rem';
                
                break;
            case "dN":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +plus3 + 'rem';
                document.getElementById(d).style.top = +minus1 + 'rem';
                
                break;
            case "dO":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +minus3 + 'rem';
                document.getElementById(d).style.top = +plus1 + 'rem';
                
                break;
            case "dP":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +plus3 + 'rem';
                document.getElementById(d).style.top = +plus1 + 'rem';
                
                break;
            case "dQ":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +minus3 + 'rem';
                
                break;
            case "dR":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.left = +plus3 + 'rem';
                
                break;
            case "dS":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +minus3 + 'rem';
                break;
            case "dT":
                document.getElementById(d).style.position = 'absolute';
                document.getElementById(d).style.top = +plus3 + 'rem';
                break;
            default:
                break;
        };
        selectingboard.appendChild(this);
        dominoes[i].classList.add("onboard");
        console.log(arraydom[10]);
    }, false);

//     self.addEventListener('mouseover', function comparevalues() {
//         if ()
//     });




};