// FILE SYSTEM - asynchronous

const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;
        writeFile("./content/result-async.txt", `here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with this task");
        });
    });
})

console.log("starting next task");

// The moment we start the readFile task, we offload the task and continue with our code.
// So when one user comes here and wants to get this functionality, node offloads this task and your app can serve other users.
// Code not read line-by-line
// start task --> offload the task --> start next task
