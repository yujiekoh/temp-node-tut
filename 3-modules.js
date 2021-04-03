// CommonJS - every file is a module by default in node
// Modules - encapsulated code (only share minimum)
const names = require("./4-names");
// console.log(names);

const sayHi = require("./5-utils");
// console.log(sayHi);

const data = require("./6-alt-flavor");
// console.log(data);

require("./7-mind-granede");

// sayHi(names.john);
// sayHi('susan');
// sayHi(john);
// sayHi(peter);