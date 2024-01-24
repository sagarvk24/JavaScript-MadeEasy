//template literal

let sentence = `Hi Sagar! I'm a template literal.`
console.log(sentence);
console.log();
// for(let letter of sentence){
//     console.log("Value : ",sentence);
// }
let a = "SAGAR";

for(let i of a){
    console.log("Letter : ", i);
}

//the working of both template literals and strings are not same.

//this is so because in JavaScript, Strings are considered as iterables whereas the Template Literal are not considered as iterables. 
//thereby, it takes the template literal as a single value 

console.log();

console.log(typeof(sentence));