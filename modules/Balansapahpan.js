var LiveForm = require("./LiveForm");
var random = require("./random.js");
var  Gishatich = require("./Gishatich.js");
module.exports =class Balansapahpan extends LiveForm{
 
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 1000;
        this.directions = [];
    }
    
   
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 3;
            gishatichHashiv++;
            var norGishatich = new Gishatich(this.x, this.y);
            gishatichArr.push(norGishatich);
            matrix[norvandak[1]][norvandak[0]] = 6;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}