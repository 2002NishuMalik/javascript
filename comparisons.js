console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >=0);
console.log("2"==2);
console.log("2"===2);


//primitive == call by value  (changes are occur in copy)
// 7 type===== string, number, boolean, null, undefined, symbol, bigINT 

const score = 100;


//non primitive == call by refrence 
// arrays, objects, functions

const heros = ["shaktiman", "naagraj"];
let myobj = {
    name : "nishu",
    age : 22,
}
const myfunction = function()
{
    console.log("hello")
}

console.log(typeof myfunction);