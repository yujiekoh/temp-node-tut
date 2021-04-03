// local
const secret = "super secret";
// share
const john = "john";
const peter = "peter";

 
// whatever you dump in the exports object will be accessible throughout the entire app. Put only the minimum

module.exports = {john, peter}

// console.log(module);