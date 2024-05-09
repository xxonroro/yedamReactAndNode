const express = require("express");
const pool = require("./mysql");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/", (request, response) => {
    response.send("Hello world");
});

// 단건 조회
app.get("/customer/:no", (request, response) => {
    const no = request.params.no;

    // 2. SQL 실행
    sql = `SELECT * FROM customer WHERE id = ${no}`;
    pool.query(sql, function (err, results, fields) {
    if (err) {
        console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
    response.send(results);
    });
});

// 전체 조회
app.get("/customer", (request, response) => {
        // 2. SQL 실행
    sql = "SELECT * FROM customer";
    pool.query(sql, function (err, results, fields) {
    if (err) {
    console.log(err);
    }
    // 3. 결과 처리
    console.log(results + "결과");
    response.send(results);
    });
});

// 등록 post
app.post("/customer", (request, response) => {
    const username = request.body.username;
    const email = request.body.email;
    const phone = request.body.phone;
    const address = request.body.address;

    sql = `insert into customer set name ='${username}', email = '${email}', phone = '${phone}', address = '${address}'`;
    pool.query(sql, function (err, results, fields) {
    if (err) {
    console.log(err);
    }
    // 3. 결과 처리
    console.log(results + "결과");
    response.send(results);
    });
});

app.put("/customer/:no", (request, response) => {
    const no = request.params.no
    const username = request.body.username;
    const email = request.body.email;
    const phone = request.body.phone;
    const address = request.body.address;
    
    sql = `update customer set name ='${username}', email = '${email}', phone = '${phone}', address = '${address}' where id = ${no}`;
    pool.query(sql, function (err, results, fields) {
    if (err) {
    console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
    response.send(results);
    });
});

app.delete("/customer/:no", (request, response) => {
    const no = request.params.no;
    
    sql = `delete from customer where id = ${no}`;
    pool.query(sql, function (err, results, fields) {
    if (err) {
    console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
    response.send(results);
    });
});



app.listen(port, () => {
    console.log(`server ruing http://localhost:${port}`);
})