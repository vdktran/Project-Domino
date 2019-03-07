function placement() { // Scope problems with the event listenrs - Use Foreach
    //  Since arrayboard.length == 0 will only be true when nothing is on the board, and the for loop can't access its second iteration unless something is placed during its first iteration, the conclusion is only currentplayer[0] can be clicked on.
        for (let p=0 ; p<currentplayer.length ; p++) {
            var self = currentplayer[p];
            var boardend = arrayboard.length -1;
            if (arrayboard.length == 0) {
                self.html.addEventListener('click', function () {
                    document.getElementById("board").appendChild(self.html);
                    arrayboard.push(self);
                    currentplayer.splice(p, 1);
                });
                
            }
    
            if (self.tuilebottom == arrayboard[0].tuilebottom || self.tuiletop == arrayboard[0].tuilebottom || self.tuilebottom == arrayboard[0].tuiletop || self.tuiletop == arrayboard[0].tuiletop || self.tuilebottom == arrayboard[boardend].tuilebottom || self.tuiletop == arrayboard[boardend].tuilebottom || self.tuilebottom == arrayboard[boardend].tuiletop || self.tuiletop == arrayboard[boardend].tuiletop)
            { 
                self.html.addEventListener('click', function () {
                    document.getElementById("board").appendChild(self.html);
                    arrayboard.push(self);
                    currentplayer.splice(p, 1);
                });
                
            }
            else {
                alert("Injouable!");
                document.getElementById("pioche").addEventListener('click', function() {
                    pioche(u);
                });
                return;
    
            }
            
        }
    }
    
// Solution 1 - à tester
function placement() {
    currentplayer.forEach(function (dom, index) {
        if (arrayboard.length == 0) {
        dom.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(dom.html);
            arrayboard.push(dom);
            currentplayer.splice(index, 1);
        });
        }
    })

    currentplayer.forEach(function (dom, index) {
        if (dom.tuilebottom == arrayboard[0].tuilebottom || dom.tuiletop == arrayboard[0].tuilebottom || dom.tuilebottom == arrayboard[0].tuiletop || dom.tuiletop == arrayboard[0].tuiletop || dom.tuilebottom == arrayboard[boardend].tuilebottom || dom.tuiletop == arrayboard[boardend].tuilebottom || dom.tuilebottom == arrayboard[boardend].tuiletop || dom.tuiletop == arrayboard[boardend].tuiletop)
        { 
        dom.html.addEventListener('click', function () {
            document.getElementById("board").appendChild(dom.html);
            arrayboard.push(dom);
            currentplayer.splice(index, 1);
        });
        
        }
        else {
        alert("Injouable!");
        document.getElementById("pioche").addEventListener('click', function() {
            pioche(u);
        });
        return;

        }
    })

}


// Solution 2

console.log("arrayboard" , arrayboard);
console.log("currentplayer", currentplayer);
console.log("dom", dom);
console.log("arrayplayers[0].domi", arrayplayers[0].domi)

var fp = function firstplacement(dom, p) {
    if (arrayboard.length == 0) {
    document.getElementById("board").appendChild(dom.html);
    arrayboard.push(dom);
    currentplayer.splice(p, 1);
    playerswitch();
    }
}

function playing() {

    currentplayer.forEach(function (dom, p) {
        dom.html.addEventListener('click', fp);
    });

    if (arrayboard.length !== 0) {

        // if(u === 0){
        //     currentplayer.forEach(function (domo){
        //         domo.html.removeEventListener('click', firstplacement);
        //     });
        // }

    currentplayer.forEach(function (dom, p) {

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

            // j'ai des problèmes avec match et dom ici - tuez-moi
            playabledominos.forEach(function (match){
                if (dom.tuilebottom == match.tuilebottom || dom.tuiletop == match.tuilebottom || dom.tuilebottom == match.tuiletop || dom.tuiletop == match.tuiletop)
                    {
                        match.html.style.setProperty("border-top-color", "rgb(255, 0, 0)");

                        function selection(match) {
                                match.html.addEventListener('dblclick', function() {
                                    console.log(playabledominos);
                                    console.log("until dblclick");
                                    arrayboard.push(dom);
                                    currentplayer.splice(p, 1);
                                    match.html.style.borderColor = "green";
                                    placement(match, p);                        
                                });
                        }
                        selection(match);
            }
        });
        
        });
    }
  });
}

}