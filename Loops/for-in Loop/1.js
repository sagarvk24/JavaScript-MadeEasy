//this loop is used to iterate over objects and arrays in JS

let obj = {
    "Name" : "Sagar Thapliyal", 
    "SAP" : 500107864,
    "Age" : 21
};

for(let key in obj)
{
    console.log("Key : ", key);
}

console.log();
for (let key in obj)
{
    console.log("Values : ",obj[key]);
}