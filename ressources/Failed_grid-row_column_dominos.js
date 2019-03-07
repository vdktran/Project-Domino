var selectingboard = document.getElementById("board");

//getElementsByClassName returns a Nodelist
var dominoes = document.getElementsByClassName("domino");

// Turn a Nodelist into an Array, works on modern browsers
var arraydom = [...dominoes];

// This places the domino I clicked on the board. It is a< for loop, it helps me call the function that places the domino for every dominoes, without having to declare the function 24 times. 
for (var i = 0; i < arraydom.length; i++) {
    var self = arraydom[i];

    self.addEventListener('click', function () { 
        var d = this.id;
        var row = this.style.gridRow;
        var column = this.style.gridColumn;
        var plus1 = ;
        var plus2 = ;
        var minus1 = ;
        var minus2 = ;

        plus1 += 1;
        plus2 += 2;
        minus1 -= 1;
        minus2 -= 2;
        zero +=0;
        rotplus += 90;
        rotminus -= 90;
        selectingboard.appendChild(this);
        
        switch (d) {
            case "dref":
                break;
            case "dA":
                row=' '+minus2+'/'+minus2+'';
                break;
            case "dE":
                row=' '+plus2+'/'+plus2+'';
                break;
            case "dB":
                row=' '+minus1+'/'+minus2+'';
                column=' '+minus1+'/'+zero+'';
                this.style.top=+minus1+'rem';
                this.style.transform='rotate('+rotminus+'deg)';
                break;
            case "dF":
                row=' '+plus2+'/'+plus1+'';
                column=' '+minus1+'/'+zero+'';
                this.style.top=+minus1+'rem';
                this.style.transform='rotate('+rotminus+'deg)';
                break;
            case "dD":
                row=' '+minus1+'/'+minus2+'';
                column=' '+zero+'/'+plus1+'';
                this.style.top=+minus1+'rem';
                this.style.transform='rotate('+rotplus+'deg)';
                break;
            case "dH":
                row=' '+plus2+'/'+plus1+'';
                column=' '+zero+'/'+plus1+'';
                this.style.top=+minus1+'rem';
                this.style.transform='rotate('+rotplus+'deg)';
                break;
            case "dC":
                row=' '+minus2+'/'+minus2+'';
                this.style.top=+plus1+'rem';
                this.style.transform='rotate('+rotplus+'deg)';
                break;
            case "dG":
                row=' '+plus2+'/'+plus2+'';
                this.style.top=+minus1+'rem';
                this.style.transform='rotate('+rotplus+'deg)';
                break; 
            default:
                break;
        };
    }, false);
};

/*var rotation = function() {
    rotplus += 90;
    rotminus -= 90;
    arraydom[0].style.transform='rotate('+rotplus+'deg)';
    arraydom[0].style.transform='rotate('+rotminus+'deg)';
};

document.getElementById("pivotbtn").addEventListener('click', rotation);

var positionnement = function() {
    plus1 += 1;
    plus2 += 2;
    minus1 -= 1;
    minus2 -= 2;
    zero +=0;
    rotplus += 90;
    rotminus -= 90;
    switch (this.id ) {}
    arraydom[0].style.grid-row=' '+plus2+'/'+plus2+'';
    arraydom[0].style.grid-row=' '+plus2+'/'+plus1+'';
    arraydom[0].style.grid-row=' '+minus1+'/'+minus2+'';
    arraydom[0].style.grid-row=' '+minus2+'/'+minus2+'';
    arraydom[0].style.grid-row=' '+minus1+'/'+zero+'';
    arraydom[0].style.grid-row=' '+zero+'/'+minus1+'';
    arraydom[0].style.grid-row=' '+zero+'/'+plus1+'';
    arraydom[0].style.grid-row=' '+plus1+'/'+zero+'';
    arraydom[0].style.grid-column=' '+plus2+'/'+plus2+'';
    arraydom[0].style.grid-column=' '+plus2+'/'+plus1+'';
    arraydom[0].style.grid-column=' '+minus1+'/'+minus2+'';
    arraydom[0].style.grid-column=' '+minus2+'/'+minus2+'';
    arraydom[0].style.grid-column=' '+minus1+'/'+zero+'';
    arraydom[0].style.grid-column=' '+zero+'/'+minus1+'';
    arraydom[0].style.grid-column=' '+zero+'/'+plus1+'';
    arraydom[0].style.grid-column=' '+plus1+'/'+zero+'';
    arraydom[0].style.transform='rotate('+rotplus+'deg)';
    arraydom[0].style.transform='rotate('+rotminus+'deg)';
    arraydom[0].style.top=+plus1+'rem';
    arraydom[0].style.top=+minus1+'rem';
}*/