var LiveForm = require("./LiveForm");
var random = require("./random.js");
var  Xotaker = require("./GrassEater.js");
module.exports =class Kendanapahpan extends LiveForm{
 
    constructor(x, y, index){
        super(x, y, index);
        this.directions = [];
    }
    
   
   
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 2;
            grassEaterHashiv++;
            var norXotaker = new Xotaker(this.x, this.y);
            grassEaterArr.push(norXotaker);
            matrix[norvandak[1]][norvandak[0]] = 5;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}


