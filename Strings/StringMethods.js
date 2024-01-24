//String Methods == String Functions

let str = "Virat Kohli";

console.log(str.toUpperCase());

//REMEMBER : .length is a property that's why we do not need to put a pair of parentheses to it, but methods need a pair of parentheses.
console.log();
console.log(str.toLowerCase());
console.log();


//Strings are immutable in JavaScript. New string is created everytime we try to apply a method
let str1 = "             Hello Sagar               ";
console.log(str1);
console.log();
console.log("After applying 'trim' method :", str1.trim()); // trim method removes whitespaces from front and end
console.log();

//charAt method :
console.log(str.charAt(4)); //4 being the index

console.log();
//replace method :  
console.log(str.replace("li", "le"));//first matching thing is replaced

//replaceAll method is there to replace all matching strings

console.log();
//slice method : 
console.log(str.slice(1, 7));   //starting index, ending index. ending value is non-inclusive

console.log();
//concat method
let sent = ` is the best batsman.`;
console.log(str.concat(sent));

console.log();