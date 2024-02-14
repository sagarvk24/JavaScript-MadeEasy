arr = [2, 4, 6, 8, 10]

console.log(`As an array :`, arr);
console.log();
// converting to a string
console.log(`As a string : `, arr.toString());


//join() method : joining elements using a symbol or a character of choice 
console.log(arr.join(` - `));

//pop() method : deletes last element from the array
arr.pop() //alters the original array

console.log(arr);

//push() method : adds the element to the array, at the last position
arr.push(12);
arr.push(`Sagar`);
console.log(arr);


//shift() method : removes the first element and returns it
console.log(arr.shift());
console.log(arr);

//unshift() method : adds the element to the beginning. Returns new array length
console.log(arr.unshift(18));
console.log();
console.log( arr.unshift(0, 2)); //also multiple items can be added
console.log(arr);

//delete() operator

delete arr[2] // leaves a vacant space there
console.log(arr);
console.log(); 
console.log("...............................");

//concat() method : joins two arrays together

arr2 = [20, 40, 60, 80];
console.log(arr.concat(arr2));


//splice() method : used to add new items to an array ::
// arr.splice (Position to add, no of elements to remove, elements to be added)

arr3 = [4, 8, 12, 16, 20];
arr3.splice(4, 2, 18, 20, 22);
console.log(".......................");
console.log(arr3);

//slice() method : slices out a piece from an array. It creates a new array
console.log(arr3.slice(3));
console.log();


//reverse() method : reverses the array 
console.log();
console.log(arr3.reverse());


console.log(".......................");

