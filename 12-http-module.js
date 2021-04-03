const http = require("http");

// createServer takes a callback function
// req refers to an incoming request a client requested from the web browser, so you'll have info about the methods in that request object
// res refers to what we're sending back
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to our home page");    
    }
    if (req.url === "/about") {
      res.end("here's our history");
    } else {
        res.end("<h1>no such page</h1><a href='/'>back home</a>");
    }
//     res.end(`
// <h1>no such page</h1>
// <a href="/">back home</a>
//     `)
    
    // res.write("welcome to our home page");
    // res.end();
})

// listen to a port
server.listen(5000);