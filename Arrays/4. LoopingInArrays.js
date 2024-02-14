//loops in Arrays 
let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//for-loop
for(let i = 0; i < array.length;i++){
    console.log(array[i]);
}
console.log();
//or 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

//for-each loop
array.forEach(( value, index, array)=>{
    console.log(index, value , array);
}
)
console.log(".....");
console.log();
// //for-of loop
for (const iterator of array) {
    console.log(iterator);
}


