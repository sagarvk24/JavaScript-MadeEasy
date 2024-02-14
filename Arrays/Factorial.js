const prompt = require('prompt-sync')();
//factorial using reduce and for loops
const number = Number(prompt("Enter a number : "))
product = 1;

while(number < 0){
    product *= number;
    number--;
}

console.log("Factorial of number : ", product);

