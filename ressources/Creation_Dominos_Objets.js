<img src="Dominos images/[0,0].png" class="domino" id="drefvert" />
<img src="Dominos images/[0,1].png" class="domino" id="drefhori" />
<img src="Dominos images/[0,2].png" class="domino" id="dK" />
<img src="Dominos images/[0,3].png" class="domino" id="dL" />
<img src="Dominos images/[0,4].png" class="domino" id="dM" />
<img src="Dominos images/[0,5].png" class="domino" id="dN" />
<img src="Dominos images/[0,6].png" class="domino" id="dO" />
<img src="Dominos images/[1,1].png" class="domino" id="dP" />
<img src="Dominos images/[1,2].png" class="domino" id="dQ" />
<img src="Dominos images/[1,3].png" class="domino" id="dR" />
<img src="Dominos images/[1,4].png" class="domino" id="dS" />
<img src="Dominos images/[1,5].png" class="domino" id="dT" />
<img src="Dominos images/[1,6].png" class="domino" id="dA" />
<img src="Dominos images/[2,2].png" class="domino" id="dE" />
<img src="Dominos images/[2,3].png" class="domino" id="dB" />
<img src="Dominos images/[2,4].png" class="domino" id="dF" />
<img src="Dominos images/[2,5].png" class="domino" id="dD" />
<img src="Dominos images/[2,6].png" class="domino" id="dH" />
<img src="Dominos images/[3,3].png" class="domino" id="dC" />
<img src="Dominos images/[3,4].png" class="domino" id="dG" />
<img src="Dominos images/[3,5].png" class="domino"/>
<img src="Dominos images/[3,6].png" class="domino" id="drefhori" />
<img src="Dominos images/[4,4].png" class="domino" id="dA" />
<img src="Dominos images/[4,5].png" class="domino" id="dE" />
<img src="Dominos images/[4,6].png" class="domino" id="dB" />
<img src="Dominos images/[5,5].png" class="domino" id="dF" />
<img src="Dominos images/[5,6].png" class="domino" id="dD" />
<img src="Dominos images/[6,6].png" class="domino" id="dH" />


// function comparedomino(domcompared) {
//     if (domcompared.tuiletop === currentplayer[p].tuilebottom) {
//         return true;
//     }

//     else if (domcompared.tuiletop === currentplayer[p].tuiletop) {
//         return true;
//     }

//     else if (domcompared.tuilebottom === currentplayer[p].tuilebottom) {
//         return true;
//     }

//     else if (domcompared.tuilebottom === currentplayer[p].tuiletop) {
//         return true;
//     } 

//     else {
//         return false;
//     }
// }



// function placementdirection() {
//     if (matchingdominos[z].direction === "west") {
//         arrayboard.push(currentplayer[p]);
//         currentplayer.splice(p,1);
//         currentplayer[p].html.classList.add("dK+180");
//     }
    
//     if (matchingdominos[z].direction === "east") {
//         arrayboard.push(currentplayer[p]);
//         currentplayer.splice(p,1);
//         currentplayer[p].html.classList.add("dK+180");
//     }

//     if (matchingdominos[z].direction === "north") {
//         arrayboard.push(currentplayer[p]);
//         currentplayer.splice(p,1);
//         currentplayer[p].html.classList.add("dK+180");
//     }

//     if (matchingdominos[z].direction === "south") {
//         arrayboard.push(currentplayer[p]);
//         currentplayer.splice(p,1);
//         currentplayer[p].html.classList.add("dK+180");
//     }
// }

// var matchingdominos = arrayboard.filter(comparedomino);

// function positioning() {
//     for (z=0; z < matchingdominos.length ; z++) {
//         var nam = matchingdominos[z].html.name;
//         document.querySelector(nam).style.borderColor = "red";

//         matchingdominos[z].addEventListener('dblclick', function placement() {
//             if (matchingdominos[z].tuiletop === currentplayer[p].tuilebottom) { 
//                 if (matchingdominos[z].direction === "west") {
//                     arrayboard.push(currentplayer[p]);
//                     currentplayer.splice(p,1);
//                     currentplayer[p].html.classList.add("dK+180");
//                 };
                
//                 if (matchingdominos[z].direction === "east") {
//                     arrayboard.push(currentplayer[p]);
//                     currentplayer.splice(p,1);
//                     currentplayer[p].html.classList.add("dK+180");
//                 };

//                 if (matchingdominos[z].direction === "north") {
//                     arrayboard.push(currentplayer[p]);
//                     currentplayer.splice(p,1);
//                     currentplayer[p].html.classList.add("dK+180");
//                 };

//                 if (matchingdominos[z].direction === "south") {
//                     arrayboard.push(currentplayer[p]);
//                     currentplayer.splice(p,1);
//                     currentplayer[p].html.classList.add("dK+180");
//                 };

//             }
        
//             else if (matchingdominos[z].tuiletop === currentplayer[p].tuiletop) {
                

//             }
        
//             else if (matchingdominos[z].tuilebottom === currentplayer[p].tuilebottom) {
                
//             }
        
//             else if (matchingdominos[z].tuilebottom === currentplayer[p].tuiletop) {
                
//             } 
//         });

//     };
//     //Les variables ci-dessous sont censés être les positions top & left du domino par rapport auquel on veut placer notre domino
//     // Possiblement comme ça : var x = document.getElementById(matchingdomino).style.left;
//     //                         var y = document.getElementById(matchingdomino).style.top;
//     // var leftplus1 = x +1;
//     // var topplus1 = y +1;
//     // var leftplus2 = x +2;
//     // var topplus2 = y +2;
//     // var leftplus3 = x +3;
//     // var topplus3 = y +3;
//     // var leftplus4 = x +4;
//     // var topplus4 = y +4;
//     // var leftminus1 = x -1;
//     // var topminus1 = y -1;
//     // var leftminus2 = x -2;
//     // var topminus2 = y -2;
//     // var leftminus3 = x -3;
//     // var topminus3 = y -3;
//     // var leftminus4 = x -4;
//     // var topminus4 = y -4;



//     var plus1 = 0;
//     var plus1 = 0;
//     var plus2 = 0;
//     var plus3 = 0;
//     var plus4 = 0;
//     var minus1 = 0;
//     var minus2 = 0;
//     var minus3 = 0;
//     var minus4 = 0;
//     var rotplus = 0;
//     var rotminus = 0;

//     plus1 += 1;
//     plus2 += 2;
//     plus3 += 3;
//     plus4 += 4;
//     minus1 -= 1;
//     minus2 -= 2;
//     minus3 -= 3;
//     minus4 -= 4;
//     rotplus += 90;
//     rotminus -= 90;

//     var d = this.className;
//     switch (d) {
//         case "dA":
//             document.getElementById(d).style.top = +minus4 + 'rem';
//             document.getElementById(d).style.position = 'absolute';
//             break;
//         case "dE":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +plus4 + 'rem';
//             break;
//         case "dB":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +minus3 + 'rem';
//             document.getElementById(d).style.left = +minus1 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
//             break;
//         case "dF":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +plus3 + 'rem';
//             document.getElementById(d).style.left = +minus1 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
//             break;
//         case "dD":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +minus3 + 'rem';
//             document.getElementById(d).style.left = +plus1 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
//             break;
//         case "dH":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +plus3 + 'rem';
//             document.getElementById(d).style.left = +plus1 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
//             break;
//         case "dI":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +plus3 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
//             break;
//         case "dJ":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +minus3 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotminus + 'deg)';
//             break;
//         case "dK":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +minus4 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
//             break;
//         case "dL":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +plus4 + 'rem';
//             document.getElementById(d).style.transform = 'rotate(' + rotplus + 'deg)';
//             break;
//         case "dM":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +minus3 + 'rem';
//             document.getElementById(d).style.top = +minus1 + 'rem';
            
//             break;
//         case "dN":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +plus3 + 'rem';
//             document.getElementById(d).style.top = +minus1 + 'rem';
            
//             break;
//         case "dO":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +minus3 + 'rem';
//             document.getElementById(d).style.top = +plus1 + 'rem';
            
//             break;
//         case "dP":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.left = +plus3 + 'rem';
//             document.getElementById(d).style.top = +plus1 + 'rem';
            
//             break;
//         case "dS":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +minus3 + 'rem';
//             break;
//         case "dT":
//             document.getElementById(d).style.position = 'absolute';
//             document.getElementById(d).style.top = +plus3 + 'rem';
//             break;
//         default:
//             break;
//     };
//     selectingboard.appendChild(this);
//     dominoes[i].classList.add("onboard");
// };


// algorithme d'un tour







// // Positionnement sur double click
// for (var i = 0; i < arrayrack.length; i++) {
//     var self = arrayrack[i];
//     self.addEventListener('dblclick', function positionnement() {})
// };
