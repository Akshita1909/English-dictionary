const readline = require("readline"); 
const rl = readline.createInterface({ 


 input: process.stdin, 
 output: process.stdout, 
}); 
rl.question("Enter a string: ", (inputString) => { 
 const pattern = /a{2,}/g; 
 const result = inputString.replace(pattern, "b"); 
 console.log("Result:", result); 
 rl.close(); 
});