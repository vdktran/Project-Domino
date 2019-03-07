var o =0;
var currentplayer = arrayplayers[o].domi;
function highlight(pla) {
     arrayplayers[pla].playerhtml.style.borderColor = "orange";
}


function showhand(f) {
for (var f=0; f < currentplayer.length; f++) {
    document.getElementById("hand").appendChild(currentplayer[f].html);
    }
}

function placement(p) {
    var self = currentplayer[p];
    var boardend = arrayboard.length -1;
    if (arrayboard.length===0) {
        self.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(currentplayer[p].html);
        });
        return;
    }

    if (currentplayer[p].tuilebottom === arrayboard[0].tuilebottom || currentplayer[p].tuiletop === arrayboard[0].tuilebottom || currentplayer[p].tuilebottom === arrayboard[0].tuiletop || currentplayer[p].tuiletop === arrayboard[0].tuiletop || currentplayer[p].tuilebottom === arrayboard[boardend].tuilebottom || currentplayer[p].tuiletop === arrayboard[boardend].tuilebottom || currentplayer[p].tuilebottom === arrayboard[boardend].tuiletop || currentplayer[p].tuiletop === arrayboard[boardend].tuiletop)
    { 
        self.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(currentplayer[p].html);
        });
        return;
    }
    else {
        alert("Injouable!");
        document.getElementById("pioche").addEventListener('click', pioche(o));
        return;
    }
}


// Set usernames and start the game

function startgame() {
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

    shuffle();
    console.log(dominoarray);
    distribution();
    console.log(arrayplayer1);
    console.log(arrayplayer2);
    console.log(arrayplayer3);
    console.log(arrayplayer4);
    console.log(arraypioche);
    console.log(dominoarray);
    console.log(arrayboard[0]);
   
    // game();
    highlight(0);
    showhand(0);
    placement(0);
}

    // console.log(arrayplayer1);
    // console.log(arrayplayer2);
    // console.log(arrayplayer3);
    // console.log(arrayplayer4);
    // console.log(arraypioche);
    // console.log(dominoarray);