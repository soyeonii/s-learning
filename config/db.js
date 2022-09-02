var mysql = require('mysql');
require("dotenv").config({ path: __dirname + `/../.env` });

module.exports = {
  init: () => {
    pool = mysql.createPool({
          host     : process.env.host, //아이피
          user     : process.env.user, //계정이름
          password : process.env.password, //비밀번호
          port     : process.env.port, //포트
          database : process.env.database, //DB 이름
          connectionLimit : process.env.connectionLimit //DB 이름
    });

    check(pool);
    return pool;
  },
}

check = (pool) => {
  pool.getConnection(function(err, con) {
      if(err){
          throw err;
      } else {
        console.log('MySQL 연결 성공!');
        // connection을 pool로 반환
        con.release();
      }
  });  
}