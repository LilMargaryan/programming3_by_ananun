
//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Bnapahpan = require("./modules/Bnapahpan.js");
var Gishatich = require("./modules/Gishatich.js");
var Kendanapahpan = require("./modules/Kendanapahpan.js");
var Fire = require("./modules/Fire.js");
var Balansapahpan = require("./modules/Balansapahpan.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
KendanapahpanArr = [];
BnapahpanArr = [];
BalansapahpanArr = [];
grassArr = [];
grassEaterArr = [];
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
gishatichArr = [];
fireArr=[];
fireDur = 0;
gishatichHashiv =0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, grassEater, gishatich, bnapahpan, kendanapahpan, balansapahpan,fr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < bnapahpan; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < kendanapahpan; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < balansapahpan; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
    for (let i = 0; i < fr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;
    }
}
matrixGenerator(30, 1, 1);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END
matrix[1][1] = 2;
matrix[20][28] = 2;
matrix[15][15] = 2;
matrix[23][18] = 3;
matrix[10][10] = 3;
matrix[26][26] = 4;
matrix[7][17] = 4;
matrix[3][3] = 5;
matrix[23][23] = 5;
matrix[22][22] = 6;
matrix[29][29] = 7;
function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;

            }
            if (matrix[y][x] == 4) {
                var bnapahpan = new Bnapahpan(x, y);
                BnapahpanArr.push(bnapahpan);

            }
            if (matrix[y][x] == 5) {
                var kendanapahpan = new Kendanapahpan(x, y);
                KendanapahpanArr.push(kendanapahpan);

            }
            if (matrix[y][x] == 6) {
                var balansapahpan = new Balansapahpan(x, y);
                BalansapahpanArr.push(balansapahpan);

            }
            // if (matrix[y][x] == 7) {
            //     var fr = new Fire(x, y);
            //     fireArr.push(fr);

            // }
        }
    }
}
function end(){
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill(guyn);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 7) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    };
}
creatingObjects();



function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].bazmanal();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
           
            grassEaterArr[i].eat();
            // grassEaterArr[i].utel();
            // grassEaterArr[i].mahanal();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
            
          
        }
    }
    if (grassArr.length <= 20) {
        for (var i in BnapahpanArr) {
            BnapahpanArr[i].sharjvel();
        }
    }
    if (grassEaterArr.length <= 4) {
        for (var i in KendanapahpanArr) {
            KendanapahpanArr[i].sharjvel();
        }
    }
    if (gishatichArr.length <= 1) {
        for (var i in BalansapahpanArr) {
            BalansapahpanArr[i].sharjvel();
        }}
       
    

    


    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEaterCounter: grassEaterHashiv,
        gishatichcounter: gishatichHashiv,
        exanak:exanak
    }
  
    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
   

}

setInterval(game,300)