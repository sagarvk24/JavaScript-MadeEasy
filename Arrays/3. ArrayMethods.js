arr = [2, 4, 6, 8, 10]

console.log(`As an array :`, arr);
console.log();
// converting to a string
console.log(`As a string : `, arr.toString());


//join() method : joining elements using a symbol or a character of choice 
console.log(arr.join(` - `));

//pop() method : deletes last element from the array
arr.pop() //alters the original array

console.log(arr)

//push() method : adds the element to the array, at the last position
arr.push(12)
arr.push(`Sagar`)
console.log(arr);


//shift() method : removes the first element and returns it
console.log(arr.shift());
console.log(arr);

//unshift() method : adds the element to the beginning. Returns new array length
console.log(arr.unshift());

