var myArray = [2, 4, 6];
var myobj = {d:  8, e: 10, f: 12};

// var a = myArray[0],
//     b = myArray[1],
//     c = myArray[2];

var [a, b, c] = myArray;

// var d = myobj.d,
//     e = myobj.e,
//     f = myobj.f;

var {d, e, f} = myobj;

console.log(a, b, c);
console.log(d, e, f);