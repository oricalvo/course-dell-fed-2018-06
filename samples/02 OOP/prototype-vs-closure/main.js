function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.dump = function() {
    console.log(this.x + ", " + this.y);
}

var pt = new Point(5, 10);
pt.dump();
// ------------------------------------------
function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    return {
        dump: dump,
    };
}

var pt = new Point(5,10);
pt.dump();

