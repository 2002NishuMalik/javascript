let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let createdDate = new Date(2023, 0, 3);
console.log(createdDate.toDateString());
let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));
