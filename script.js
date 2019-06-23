
//! Setup function fires automatically
// var i = 0;
// function change() {
//   var doc = document.getElementById("background");
//   var color = ["black", "blue", "brown", "green"];

//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);

// var Fire = require("./modules/Fire.js");
//- Using an anonymous function:
// document.getElementById("clickMe").onclick = function () {  
//     for (var y = 0; y < matrix.length; y++) {
//     for (var x = 0; x < matrix[y].length; x++) {
       
     
//             var fr = new Fire(x, y);
//             fireArr.push(fr);

        
//     }
// } };

guyn = "#006600";
count = 0;
let exanak;
var intervalObject = setInterval(function () {
    count++;
    if (count < 10) {
        guyn = "#006600";
        exanak = "garun";
    }
    if (count >= 10 && count < 20) {
        guyn = "#009933";
    }
    else if (count >= 20 && count < 30) {
        guyn = "#cc9900";
    }
    else if (count >= 30 && count < 40) {
        guyn = "#ffffcc";
    }
    else if (count >= 40) {
        count = 0;
    }
}, 1000);
var paragraph = document.getElementById("p");
weather = setInterval(function () {
   
    if (count < 10) {
       
 var text = document.createTextNode("Spring");
 document.getElementById('p').innerHTML = '';
 paragraph.appendChild(text);
    }
    if (count >= 10 && count < 20) {
        var text = document.createTextNode("Summer");
        document.getElementById('p').innerHTML = '';
 paragraph.appendChild(text);
    }
  if (count >= 20 && count < 30) {
        var text = document.createTextNode("Autumn");
        document.getElementById('p').innerHTML = '';
 paragraph.appendChild(text);
    }
    else if (count >= 30 && count < 40) {
        var text = document.createTextNode("Winter");
        document.getElementById('p').innerHTML = '';
        paragraph.appendChild(text);
    }
    else if (count >= 40) {
        count = 0;
    }
   
}, 10000);

socket.on("krak", createFire);
 

function setup() {

    var socket = io();

    var side = 20;

     matrix = [];




    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let GishatichCountElement = document.getElementById('gishatichcounter');
    let clickme = document.getElementById('clickMe');


    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    clickme.addEventListener('click',function(){
        alert('dggdd')
    })

    
    socket.on("data", drawCreatures);
    function bodyClick(evt) {
        console.log(evt.pageX, evt.pageY);
    }
    window.onclick = bodyClick;
   
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        GishatichCountElement.innerText = data.gishatichcounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        function createFire() {
            alert("qwertyu")
        }

        //! clearing background by setting it to new grey color
        // background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill(guyn);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('brown');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('white');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#ff3333');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#cc0000');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}