var myArray = [5, 10, 15, 20];
var myObj = {d: 10, e: 20, f: 30};

// com for in
for(let i in myArray){
    console.log(myArray[i]);
}

for(let i in myObj){
    console.log(myObj[i]);
}

//com for of
for(let i of myArray){
    console.log(i);
}
