class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point {
    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    dump() {
        super.dump();

        console.log(this.z);
    }
}

// var pt = new PointEx(5, 10, 20);
// pt.dump();

var arr = [new Point(5, 10), new PointEx(5, 10, 20)];
for(const x of arr) {
    x.dump();
}

function doSomething(x) {
    x.Dump();
}
