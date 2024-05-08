// CommonJS module : node.js 에서 사용하는 방식
// 1. myarray.js 파일에서 모듈을 가져오는 방법
const totalPoint = require("./myarray");

// 2. 실행
let result = totalPoint();
console.log(result);