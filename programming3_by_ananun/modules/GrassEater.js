var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class GrassEater extends LiveForm {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 3;
        this.MIN_energy = 3;
        this.MAX_energy = 8;
        this.directions = [];
        this.index = 2;
    }
    


   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy--;

            if (this.energy <= 0) this.mahanal();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            for (var i in grassArr) {
                if (norvandak[0] == grassArr[i].x && norvandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {
        grassEaterHashiv++;
        var NorVandak = random(this.yntrelVandak(0));
        if (NorVandak && this.energy >= this.MAX_energy) {
            var norXotaker = new Xotaker(NorVandak[0], NorVandak[1]);
            grassEaterArr.push(norXotaker);
            matrix[NorVandak[1]][NorVandak[0]] = 2;
            this.energy = this.MIN_energy;
        }
    }
    mahanal() {

        matrix[this.y][this.x] = 0;

        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
            }
        }
    }
}