const prompt = require('prompt-sync')();

function sum(number1, number2){
    console.log("Sum of Numbers : ", (number1+number2))
}
num1 = prompt("Enter Fisrt Number : ")
num2 = prompt("Enter Second Number : ")


sum(Number(num1), Number(num2)) //returns sum
sum(num1, num2) //concatenates two nunmbers as a string e.g 18 and 4 will return 184
console.log();


//or we can also define the function as

function productTwo(numberOne, numberTwo){
    return numberOne*numberTwo
}

result = productTwo(num1, num2)
console.log("Product of numbers : ", result); 
