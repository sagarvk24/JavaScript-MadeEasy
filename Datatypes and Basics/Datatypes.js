//'let' allows to update the value but can be declared once only
let a = 43
a = 12
console.log(a)
//'const' neither allows to update later nor can be declared later
const b = 32
console.log(b)
//..........................................................................
//'let' can be declared and initialized on later basis
let x;
console.log(x);
//'const' needs immediate initialization
const y = 3.14;
console.log(y);
//.....................................................................
//DATATYPES
let Name = "Tony Stark";
let number = 18;
let bool = false;
let und; 
let n = null
let biggie = BigInt(13356)
let symb = Symbol(189981)

console.log(typeof Name);
console.log(typeof number);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof n);
console.log(typeof biggie);
console.log(typeof symb);

//.................................................................................
//object when created, is always of type const

// const profile = {
//     username : "@sagarvk18_",
//     isFollow : true,
//     followers : 2650000000
// };

// // console.log(profile);
// console.log(profile["username"]);


// JavaScript Object
const product = {
    penName : "Parker Jotter Standard CT Ball Pen",
    color : "black",
    ratings : 4,
    price : 270.00,
    discount : "5%"
};
product["price"] = 320.20 //value is being updated

console.log(product["penName"]);
console.log(product["price"])