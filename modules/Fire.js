var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Fire extends LiveForm{
 
    constructor(x, y, index){
        super(x, y, index);
        this.directions = [];
         this.energy = 1000;
    }
    
    stanalNorKordinatner() {
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
   //  yntrelVandak(ch) {
   //     this.stanalNorKordinatner();
   //     return super.yntrelVandak(ch);
   // }
    mahanal() {
        matrix[this.y][this.x] = 0;

        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }
    taracvel() {
        this.stanalNorKordinatner();

        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {
                if (matrix[y][x] == 1) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 2) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 7;
                    fireArr.push(new Fire(x, y));
                    for (var i in gishatichArr) {
                        if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                            gishatichArr.splice(i, 1);
                            break;
                        }
                    }
                }
                
            }
        }

        this.mahanal();
    }
}
