//map() and filter() in js

//map() : creates a new array by performing some operation on each array element
let array = [1,3,5,7,9,11]

let squaredArray = []
//filling the new array with the squared values of original array
for(let i = 0; i<array.length; i++)
{
    const element = array[i];
    squaredArray.push(element**2);
}
console.log(squaredArray);

//easy method instead of performing this above method
let arrUsingMap = array.map(element=>{
    return element**3; //cubes of the original values, just for a change
})

console.log();
console.log(arrUsingMap);


//filter() : filters an array with values that passes a test. Creates a new array. Very IMPORTANT
const greaterThan = (element)=>{
    if(element > 5)
    return true;
return false;
}

console.log();
console.log(array.filter(greaterThan)); //filters the values according to the function 

