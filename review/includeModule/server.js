// 웹 서버
const http = require("http");
const movie = require("./movie");

const server = http.createServer(async(request, response) => {
    response.writeHead(200, {"Content-type": "application/json"});
    let movieNm = await movie();
    console.log("server: " + movieNm);
    let movieInfo = {movieNm: movieNm, movieCd: 1};
    response.end(JSON.stringify(movieInfo));
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server running http://127.0.0.1:3000");
});

