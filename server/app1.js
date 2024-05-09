const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async(request, response) => {
    // const myURL = new URL("http://127.0.0.1" + request.url);
    // const pathname = myURL.pathname
    const url1 = url.parse(request.url, true);
    const pathname1 = url1.pathname;
    console.log("pathname1", pathname1);

    response.setHeader("Content-Type", "text/plain");
    response.statusCode = 200;
    if(pathname1 == "/json") {
        response.end("Hello Json");
    }
    else if(pathname1 == "/html") {
        response.end("Hello Html", "utf-8")
    }
    else if(pathname1 == "/text") {
        response.end("Hello Text", "utf-8")
    }
    else {
        response.statusCode = 404;
        response.end();
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server running http://127.0.0.1:3000");
});
