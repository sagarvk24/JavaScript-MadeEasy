//why do we need Template Literals, if we have Strings??

let object = {
    item : "Pen",
    price : 12
};

console.log("The cost of", object.item, "is", object.price, "rupees."); // we have to make such smaller strings inside a string.

//But what in case of a Template Literal ?
let output = `The cost ${object.item} is ${object.price} rupees.`;
console.log(output);
//we are adding placeholders in the string
//This concept is known as STRING INTERPOLATION.
console.log();

//one more thing to be noticed that in first case, when we were not creating template literal, 12 was being printed highlighted. This is was because it was being treated as a number that time. But when we created a template literal, then it became a part of string and that;s why didn't get highlight the final time.

console.log();

let exp = `I'm a template literal and I wish to evaluate 6+5 that is : ${6+5}`;
console.log(exp);

//escape characters : \n, \t.....