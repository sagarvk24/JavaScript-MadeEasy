//this loop is used to iterate in strings or arrays

let str = "Sagar Thapliyal";

for (let letter of str) {
    console.log("Letter : ", letter);
}

//now, length of the string using for-of loop

let ctr = 0;

for (let l of str)
    ctr++;
    

console.log("Size of string : ",ctr);