var LiveForm = require("./LiveForm");
var random = require("./random.js");

// module.exports = class Gishatich extends LiveForm{
  
//     constructor(x, y, index){
//         super(x, y, index);
//         this.energy = 30;
//         this.MIN_energy = 15;
//         this.MAX_energy = 40;
//         this.directions = [];
//         this.index = 3;
//     }
    
// //     yntrelVandak(ch) {
// //         this.stanalNorKordinatner();
// //       return super.yntrelVandak(ch);
// //    }

//     sharjvel() {
//         this.stanalNorKordinatner();
//         var datarkvandakner = this.yntrelVandak(0);
//         var norVandak = random(datarkvandakner);
//         if (norVandak) {
//             matrix[this.y][this.x] = 0;
//             matrix[norVandak[1]][norVandak[0]] = 3;
//             this.x = norVandak[0];
//             this.y = norVandak[1];
//             this.energy--;
//             if (this.energy <= 0) this.mahanal();


//         }
//     }
//     utel() {
//         this.stanalNorKordinatner();
//         var datarkvandakner = this.yntrelVandak(2);
//         var norvandak = random(datarkvandakner);
//         if (norvandak) {
//             matrix[this.y][this.x] = 0;
//             matrix[norvandak[1]][norvandak[0]] = 3;
//             for (var p in grassEaterArr) {
//                 if (this.x == grassEaterArr[p].x && this.y == grassEaterArr[p].y) {
//                     grassEaterArr.splice(p, 1);
//                 }
//             }

//             this.x = norvandak[0];
//             this.y = norvandak[1];
//             this.energy++;
//         }
//         else {
//             this.sharjvel();
//         }
//     }

//     bazmanal() {
//         console.log("bareeev es eka")
//         var NorVandak = random(this.yntrelVandak(0));
//         if (NorVandak && this.energy >= this.MAX_energy) {
//             var norGishatich = new Gishatich(NorVandak[0], NorVandak[1]);
//             gishatichArr.push(norGishatich);
//             matrix[NorVandak[1]][NorVandak[0]] = 3;
//             this.energy = this.MIN_energy;
//         }
//     }
//     mahanal() {

//         matrix[this.y][this.x] = 0;
//         for (var h in gishatichArr) {
//             if (this.x == gishatichArr[h].x && this.y == gishatichArr[h].y) {
//                 gishatichArr.splice(h, 1);

//             }

//         }
//     }
// }
module.exports = class Gishatich extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 30;
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
            gishatichHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2;
            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);
            this.life = 5;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 53) {
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
            matrix[y][x] = 3;
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

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1)
            }
        }
    }
}