//Array is a collection of entities, even of different data type

const fruits = ['Mangoes', 'Bananas', 'Kiwis', 'Grapes', 'Litchis']

console.log(typeof fruits);
console.log();
console.log(fruits);
console.log();

//accessing elements using their indices
console.log(fruits[1]); 
console.log();
console.log(fruits[4]);
console.log();
console.log(fruits[7]); //trying to access the element which is not even present


//length of array
console.log();
console.log(fruits.length);

//Remember, Array is mutable
console.log();


//changing the value of an element at a specific index
fruits[3] = 'Pineapple'
console.log(`Array after changing the values : \n`, fruits);

console.log();