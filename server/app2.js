const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

let emps = [ {no: 100, name: "park", age: 20},
    {no: 101, name: "choi", age: 26},
    {no: 102, name: "kim", age: 10}
];

const server = http.createServer(async(request, response) => {
    const _url = url.parse(request.url, true);
    const pathname = _url.pathname;

    response.writeHead(200, {"Content-Type": "application/json"});
    if(pathname == '/emp') {
        response.end(JSON.stringify(emps));
    }
    else if(pathname == '/empInfo') {
        let filterEmps = emps.filter(element => element.no == _url.query.no);
        response.end(JSON.stringify(filterEmps));
    }
    else if(pathname == '/empDelete') {
        let deleteEmps = emps.filter(element => element.no != _url.query.no);
        response.end(JSON.stringify(deleteEmps));
    }
    else if(pathname == '/empInsert') {
        emps.push({no: _url.query.no, name: _url.query.name, age: _url.query.age });
        response.end(JSON.stringify(emps));
    }
    else {
        response.statusCode = 404;
        response.end();
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log(`server running http://${hostname}:${port}/`);
});
