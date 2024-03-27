const name = "nishu";
const repo = 50;
console.log(`my name is ${name} and my repo count is ${repo}`);

// agr strings key value pair m access krna h toh  ---new--- keyword ka use krenge 

const gameName = new String('nishu-malik-milan')

console.log(gameName[0]);
//prototype access krne ka trika 
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const newString1 = gameName.slice(-4,1)
console.log(newString1);
const newString2 = "       nishuuu   "
console.log(newString2.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));