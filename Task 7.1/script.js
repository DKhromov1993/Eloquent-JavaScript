/**
 * Created by Den on 04.07.2016.
 */

function Vector(x, y){
    this.x = x;
    this.y = y;
}

Object.defineProperty(Vector.prototype, "length", {
    get: function(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

Vector.prototype.plus = function(argVect){
    return new Vector(this.x + argVect.x, this.y + argVect.y);
}

Vector.prototype.minus = function(argVect){
    return new Vector(this.x - argVect.x, this.y - argVect.y);
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
