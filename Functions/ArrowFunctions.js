//using arrow functions in JS
//more convenient syntax
//function can be stored in a variable
// function can be passed in turn to some another function
const func = ()=>{
    console.log("I'm an arrow function!");
}
func()
console.log();

//another method, passing a parameter
const func1 = (num1)=>{
    console.log("The square of ", num1, " is ", num1**2);
}
func1(12);
