var obj = {
    id:1,
    name: "Ori",
};

delete obj.id;
delete obj.id;

console.log(obj.email);

for(var key in obj) {
    console.log(key);
}
