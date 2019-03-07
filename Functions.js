if (match === arrayboard[0]) {
    arrayboard.unshift(dom);
}
else {
    arrayboard.push(dom);
}

// choice 1

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dM";
        break;
        case "ArrowDown":
        dom.html.id = "dO180";
        break;
        case "ArrowLeft":
        dom.html.id = "dK180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 2

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dN";
        break;
        case "ArrowDown":
        dom.html.id = "dP180";
        break;
        case "ArrowRight":
        dom.html.id = "dL";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 3

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dA";
        break;
        case "ArrowLeft":
        dom.html.id = "dB";
        break;
        case "ArrowRight":
        dom.html.id = "dD";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 4

function choice(event) {
    switch(event.key) {
        case "ArrowDown":
        dom.html.id = "dE180";
        break;
        case "ArrowLeft":
        dom.html.id = "dF";
        break;
        case "ArrowRight":
        dom.html.id = "dH";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 5

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dM180";
        break;
        case "ArrowDown":
        dom.html.id = "dO";
        break;
        case "ArrowLeft":
        dom.html.id = "dK";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 6

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dN180";
        break;
        case "ArrowDown":
        dom.html.id = "dP";
        break;
        case "ArrowRight":
        dom.html.id = "dL180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 7

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dA180";
        break;
        case "ArrowLeft":
        dom.html.id = "dB180";
        break;
        case "ArrowRight":
        dom.html.id = "dD180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 8

function choice(event) {
    switch(event.key) {
        case "ArrowDown":
        dom.html.id = "dE";
        break;
        case "ArrowLeft":
        dom.html.id = "dF180";
        break;
        case "ArrowRight":
        dom.html.id = "dH180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 9

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dN";
        break;
        case "ArrowDown":
        dom.html.id = "dP180";
        break;
        case "ArrowRight":
        dom.html.id = "dL";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 10

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dM";
        break;
        case "ArrowDown":
        dom.html.id = "dO180";
        break;
        case "ArrowLeft":
        dom.html.id = "dK180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 11

function choice(event) {
    switch(event.key) {
        case "ArrowLeft":
        dom.html.id = "dF";
        break;
        case "ArrowDown":
        dom.html.id = "dE180";
        break;
        case "ArrowRight":
        dom.html.id = "dH";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 12

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dA";
        break;
        case "ArrowLeft":
        dom.html.id = "dB";
        break;
        case "ArrowRight":
        dom.html.id = "dD";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 13

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dN180";
        break;
        case "ArrowDown":
        dom.html.id = "dP";
        break;
        case "ArrowRight":
        dom.html.id = "dL180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 14

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dM180";
        break;
        case "ArrowDown":
        dom.html.id = "dO";
        break;
        case "ArrowLeft":
        dom.html.id = "dK";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 15

function choice(event) {
    switch(event.key) {
        case "ArrowLeft":
        dom.html.id = "dF180";
        break;
        case "ArrowDown":
        dom.html.id = "dE";
        break;
        case "ArrowRight":
        dom.html.id = "dH180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}

// choice 16

function choice(event) {
    switch(event.key) {
        case "ArrowUp":
        dom.html.id = "dA180";
        break;
        case "ArrowLeft":
        dom.html.id = "dB180";
        break;
        case "ArrowRight":
        dom.html.id = "dD180";
        break;
    }
    pose(dom, match);
    console.log(dom.html.id);
    
}


function playing() {

    ///////////////////////////// First placement, special situation = nothing on the board
    
        currentplayer.forEach(function (dom, p) {
            
            dom.html.addEventListener('click', firstplacement);
    
            // Declare firstplacement here to avoid scope problems, no arguments or eventlistener fires immediately
            function firstplacement() {
                if (arrayboard.length == 0) {
                document.getElementById("boardgame").appendChild(dom.html);
                dom.html.id = "dfirst";
                dom.html.style.position = 'absolute';
                dom.html.style.top = 0;
                dom.html.style.left = 0;
                arrayboard.push(dom);
                currentplayer.splice(p, 1);
                console.log("arrayboard" , arrayboard);
                console.log("currentplayer", currentplayer);
                console.log("arrayplayers[0].domi", arrayplayers[0].domi)
                dom.html.removeEventListener('click', firstplacement);
                playerswitch();
                }
            }
        });
    



    /////////////////////////////
    
    
    
        if (arrayboard.length !== 0) {
    
            /////// Remove the firstplacement event listener, triggers everytime it's Joueur 1's turn
            if(u === 0){
                currentplayer.forEach(function (domo){
    
                    domo.html.removeEventListener('click', firstplacement);
    
                    // declare firstplacement again or removeEventListener does not recognise the second argument
                    function firstplacement() {
                        if (arrayboard.length == 0) {
                        document.getElementById("boardgame").appendChild(dom.html);
                        arrayboard.push(dom);
                        currentplayer.splice(p, 1);
                        console.log("arrayboard" , arrayboard);
                        console.log("currentplayer", currentplayer);
                        console.log("arrayplayers[0].domi", arrayplayers[0].domi)
                        playerswitch();
                        }
                    }
                });
            }
            ///////
    
    
            ////// Every dominos get the red border
        currentplayer.forEach(function (dom, s) {
    
            if(arrayboard.length === 1) {
                var playabledominos = [arrayboard[0]];
            }
            else {
                var playabledominos = [arrayboard[0], arrayboard[arrayboard.length -1]];
            }
    
            if (dom.tuilebottom == arrayboard[0].tuilebottom || dom.tuiletop == arrayboard[0].tuilebottom || dom.tuilebottom == arrayboard[0].tuiletop || dom.tuiletop == arrayboard[0].tuiletop || dom.tuilebottom == arrayboard[arrayboard.length -1].tuilebottom || dom.tuiletop == arrayboard[arrayboard.length -1].tuilebottom || dom.tuilebottom == arrayboard[arrayboard.length -1].tuiletop || dom.tuiletop == arrayboard[arrayboard.length -1].tuiletop)
            { 
                // put positioning here
            dom.html.addEventListener('click', function () {
                // document.getElementById("board").appendChild(dom.html);
    
                playabledominos.forEach(function (match){
                    if (dom.tuilebottom == match.tuilebottom || dom.tuiletop == match.tuilebottom || dom.tuilebottom == match.tuiletop || dom.tuiletop == match.tuiletop)
                        {
                            match.html.style.setProperty("border-color", "rgb(255, 0, 0)");
    
                            function selection(match) {
                                    function greenselection() {
                                        match.html.style.borderColor = "green";
                                        placement(match, dom, s);
                                        match.html.removeEventListener('dblclick', greenselection);                     
                                    }
    
                                    match.html.addEventListener('dblclick', greenselection);
                            }
    
                            selection(match);
                }
            });
            
            });
        }
      });
    }
    
    }


function addfirstplacement(dom, p) {
        dom.html.addEventListener('click', firstplacement);
}

function removefirstplacement(dom, p) {   
        dom.html.removeEventListener('click', firstplacement);
}

function firstplacement() {
        if (arrayboard.length == 0) {
        document.getElementById("boardgame").appendChild(dom.html);
        dom.html.id = "dfirst";
        dom.html.style.position = 'absolute';
        dom.html.style.top = 0;
        dom.html.style.left = 0;
        arrayboard.push(dom);
        currentplayer.splice(p, 1);
        console.log("arrayboard" , arrayboard);
        console.log("currentplayer", currentplayer);
        console.log("arrayplayers[0].domi", arrayplayers[0].domi)
        playerswitch();
        }
}

function checkplayabledominos() {
    
        if(arrayboard.length === 1) {
            var playabledominos = [arrayboard[0]];
        }
        else {
            var playabledominos = [arrayboard[0], arrayboard[arrayboard.length -1]];
        }

        if (dom.tuilebottom == arrayboard[0].tuilebottom || dom.tuiletop == arrayboard[0].tuilebottom || dom.tuilebottom == arrayboard[0].tuiletop || dom.tuiletop == arrayboard[0].tuiletop || dom.tuilebottom == arrayboard[arrayboard.length -1].tuilebottom || dom.tuiletop == arrayboard[arrayboard.length -1].tuilebottom || dom.tuilebottom == arrayboard[arrayboard.length -1].tuiletop || dom.tuiletop == arrayboard[arrayboard.length -1].tuiletop)
        { 
        dom.html.addEventListener('click', addredborder);
    }
}

function addredborder() {
    playabledominos.forEach(checkredborder(match));
}

function checkredborder(match){
    if (dom.tuilebottom == match.tuilebottom || dom.tuiletop == match.tuilebottom || dom.tuilebottom == match.tuiletop || dom.tuiletop == match.tuiletop)
        {
            match.html.style.setProperty("border-color", "rgb(255, 0, 0)");
            selection();
}
}

function selection() {
    match.html.addEventListener('dblclick', greenselection);
}

function greenselection() {
    match.html.style.borderColor = "green";
    placement();
    match.html.removeEventListener('dblclick', greenselection);                     
}

function pose() {
    var dominoid = dom.html.id;
    var matchtop = document.getElementById(match.html.id).style.top;
    var matchleft = document.getElementById(match.html.id).style.left;
    var xd = parseInt(matchleft, 10);
    var yd = parseInt(matchtop, 10);

    var leftplus1 = xd +1;
    var topplus1 = yd +1;
    var leftplus3 = xd +3;
    var topplus3 = yd +3;
    var leftplus4 = xd +4;
    var topplus4 = yd +4;
    var leftminus1 = xd -1;
    var topminus1 = yd -1;
    var leftminus3 = xd -3;
    var topminus3 = yd -3;
    var leftminus4 = xd -4;
    var topminus4 = yd -4;
    var rotplus = 90;
    var rotminus = -90;
    var uturn = 180;

    switch (dominoid) {
        case "dA":
            document.getElementById(dominoid).style.top = +topminus4+'rem';
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = xd;
            break;
        case "dA180":
            document.getElementById(dominoid).style.top = +topminus4+'rem';
            document.getElementById(dominoid).style.left = xd;
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        case "dE":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus4+'rem';
            document.getElementById(dominoid).style.left = xd;
            break;
        case "dE180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus4+'rem';
            document.getElementById(dominoid).style.left = xd;
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        case "dB":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topminus3+'rem';
            document.getElementById(dominoid).style.left = +leftminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dB180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topminus3+'rem';
            document.getElementById(dominoid).style.left = +leftminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dF":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus3+'rem';
            document.getElementById(dominoid).style.left = +leftminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dF180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus3+'rem';
            document.getElementById(dominoid).style.left = +leftminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dD":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topminus3+'rem';
            document.getElementById(dominoid).style.left = +leftplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dD180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topminus3+'rem';
            document.getElementById(dominoid).style.left = +leftplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dH":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus3+'rem';
            document.getElementById(dominoid).style.left = +leftplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dH180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.top = +topplus3+'rem';
            document.getElementById(dominoid).style.left = +leftplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dK":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus4+'rem';
            document.getElementById(dominoid).style.top = yd;
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dK180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus4+'rem';
            document.getElementById(dominoid).style.top = yd;
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dL":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus4+'rem';
            document.getElementById(dominoid).style.top = yd;
            document.getElementById(dominoid).style.transform = 'rotate(' + rotplus + 'deg)';
            break;
        case "dL180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus4+'rem';
            document.getElementById(dominoid).style.top = yd;
            document.getElementById(dominoid).style.transform = 'rotate(' + rotminus + 'deg)';
            break;
        case "dM":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus3+'rem';
            document.getElementById(dominoid).style.top = +topminus1+'rem';
            break;
        case "dM180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus3+'rem';
            document.getElementById(dominoid).style.top = +topminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        case "dN":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus3+'rem';
            document.getElementById(dominoid).style.top = +topminus1+'rem';
            document.getElementById(dominoid).style.left = xd;            
            break;
        case "dN180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus3+'rem';
            document.getElementById(dominoid).style.top = +topminus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        case "dO":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus3+'rem';
            document.getElementById(dominoid).style.top = +topplus1+'rem';            
            break;
        case "dO180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftminus3+'rem';
            document.getElementById(dominoid).style.top = +topplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        case "dP":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus3+'rem';
            document.getElementById(dominoid).style.top = +topplus1+'rem';            
            break;
        case "dP180":
            document.getElementById(dominoid).style.position = 'absolute';
            document.getElementById(dominoid).style.left = +leftplus3+'rem';
            document.getElementById(dominoid).style.top = +topplus1+'rem';
            document.getElementById(dominoid).style.transform = 'rotate(' + uturn + 'deg)';
            break;
        default:
            break;
    }
    match.html.style.borderColor = "transparent";
    console.log(dom.html.style.transform);
    console.log(dom.direction);
    console.log("dom", dom);
    window.removeEventListener('keydown', choice(event));
}


// ///////////////////////////////

function playing() {
        currentplayer.forEach(addfirstplacement(dom, p));
        if (arrayboard.length !== 0) {
            if(u === 0){
                currentplayer.forEach(removefirstplacement);
            }
        currentplayer.forEach(checkplayabledominos);
        }
    
}