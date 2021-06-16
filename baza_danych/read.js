// Node.js program to demonstrate the  
// fs.readFileSync() method 

// Include fs module
const fs = require('fs');
const path = require("path");

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync(path.resolve(__dirname, "../baza_danych/input.txt"), { encoding: 'utf8', flag: 'r' });

// Display the file data
console.log(data);