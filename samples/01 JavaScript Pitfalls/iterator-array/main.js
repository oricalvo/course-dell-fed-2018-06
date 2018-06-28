var arr = ["Ori","Roni","Udi"];

for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// for(var i in arr) {
//     console.log(i);
// }

// arr.forEach(function(num) {
//     console.log(num);
// });
//
for(var num of arr) {
    console.log(num);
}


