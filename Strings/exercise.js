//prompt the user to enter theor full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

const prompt = require('prompt-sync')();
let name = prompt("Enter your full name without spaces : ");
const len = name.length;
const username = "@"+name+len;
console.log(username);