function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.dump = function() {
    console.log(this.x + ", " + this.y);
}

var pt1 = new Point(5, 10);
var pt2 = new Point(5, 10);

pt1.x = "ori";
pt1.dump();

console.log(pt1.dump == pt2.dump);

