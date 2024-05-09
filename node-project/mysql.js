// mysql 모듈 로드
const mysql = require("mysql2"); 
// mysql 접속 정보
const conn = { host: "localhost", 
 port: "3306", 
 user: "son", 
 password: "smjsmk8841!", 
 database: "test",
 connectionLimit: 10,
};
// DB 커넥션 생성
// let connection = mysql.createConnection(conn);
let pool = mysql.createPool(conn);

module.exports = pool;

