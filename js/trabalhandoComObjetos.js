var meuObjt = {
    a: 2,
    b: 4,
    c: 6
};

console.log(Object.keys(meuObjt));
console.log(Object.values(meuObjt));
console.log(meuObjt.hasOwnProperty('d'));
console.log('b' in meuObjt);
console.log(Object.entries(meuObjt));
Object.seal(meuObjt);
meuObjt.a = 1;
console.log(Object.entries(meuObjt));
Object.freeze(meuObjt);
meuObjt.c = 7;
console.log(Object.entries(meuObjt));