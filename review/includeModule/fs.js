// 비동기식 = non-blocking 함수 => 콜백 함수 이용

const fs = require("fs");
fs.readFile("test.txt", "utf8", (err, data) => console.log(data));
console.log("the end");