// FILE SYSTEM - synchronous

const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf8"); // parameters: file path, encoding
const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);
writeFileSync("./content/first.txt", "change this");

// if there was a user who takes very long to write this, node won't be able to serve other users and your application will be down
writeFileSync("./content/result-sync.txt", `here is the result: ${first}, ${second}`, {flag: 'a'});

console.log("done with this task");
console.log("starting next one");

// Code is read line-by-line
// start task --> complete task --> start next task
