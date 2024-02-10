//let vs const, how you should declare an array in JS
// using let, allows you to reassign the entire array to a new value, where const does not allows you to perform this, only modification is allowed.

let array = [1, 3, 5]
array = [2, 4, 6]
console.log(array);

const constArray = [3, 6, 9, 12]
// constArray = [4, 8, 12] //this is will cause an error here
console.log(constArray);


// on the other hand, modifications can be done 
array[2] = 8
console.log();
console.log(array); 
console.log();
console.log(constArray);


