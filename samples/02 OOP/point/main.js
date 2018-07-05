var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);

function Tag() {
}

var t1 = new Tag();
t1.pt1 = pt2;
t1.pt2 = pt2;

