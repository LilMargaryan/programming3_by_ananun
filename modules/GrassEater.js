// var LiveForm = require("./LiveForm");
// var random = require("./random.js");



// module.exports = class GrassEater extends LiveForm {
//     constructor(x, y, index){
//         super(x, y, index);
//         this.energy = 3;
//         this.MIN_energy = 3;
//         this.MAX_energy = 8;
//         this.directions = [];
//         this.index = 2;
//         this.life=10;
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     } 


//     sharjvel() {
//         this.stanalNorKordinatner();
//         var datarkvandakner = this.yntrelVandak(0);
//         var norvandak = random(datarkvandakner);
//         if (norvandak) {
//             matrix[this.y][this.x] = 0;
//             matrix[norvandak[1]][norvandak[0]] = 2;

//             this.x = norvandak[0];
//             this.y = norvandak[1];

//             this.energy--;

//             if (this.energy <= 0) this.mahanal();
//         }
//     }
//     utel() {
//         this.stanalNorKordinatner();
//         var datarkvandakner = this.yntrelVandak(1);
//         var norvandak = random(datarkvandakner);
//         if (norvandak) {
//             for (var i in grassArr) {
//                 if (norvandak[0] == grassArr[i].x && norvandak[1] == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }
//             matrix[this.y][this.x] = 0;
//             matrix[norvandak[1]][norvandak[0]] = 2;

//             this.x = norvandak[0];
//             this.y = norvandak[1];

//             this.energy++;
//         }
//         else {
//             this.sharjvel();
//         }
//     }


//     bazmanal() {
//         grassEaterHashiv++;
//         // var NorVandak = random(this.yntrelVandak(0));
//         // if (NorVandak && this.energy >= this.MAX_energy) {
//         //     var norXotaker = new GrassEater(NorVandak[0], NorVandak[1]);
//         //     grassEaterArr.push(norXotaker);
//         //     matrix[NorVandak[1]][NorVandak[0]] = 2;
//         //     this.energy = this.MIN_energy;

//             let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);

//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 2;
//             let grassEater = new GrassEater(x, y);
//             grassEaterArr.push(grassEater);
//             this.life = 5;
//         }
       
//     }
//     mahanal() {

//         matrix[this.y][this.x] = 0;

//         for (var i in grassEaterArr) {
//             if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
//                 grassEaterArr.splice(i, 1);
//             }
//         }
//     }
// }
var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class GrassEater extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            grassEaterHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2;
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);
            this.life = 5;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 13) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterArr) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
    }
}



    