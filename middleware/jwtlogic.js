require("dotenv").config({ path: __dirname + `/../.env` }); 
const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const TOKEN_EXPIRED = -2;
const TOKEN_INVALID = -1;

const secretKey = process.env.secretkey; // 시크릿 키
const option = {
  algorithm: process.env.algorithm, // 암호화 알고리즘
  expiresIn : process.env.expriresin,  // 토큰 유효 기간
  issuer : process.env.issuer // 발행자
}

module.exports = {

  sign: async (id) => {
    try{
      /* 현재는 idx와 email을 payload로 넣었지만 필요한 값을 넣으면 됨 */
      const payload = {
        id: id
      };
      const result = {
        //sign메소드를 통해 access token 발급!
        token: jwt.sign(payload, secretKey, option),
        refreshToken: randToken.uid(256)
      };
      return result;
    }
    catch (err) {
      return err;
    }
  },


  verify: (token) => {
    let decoded;
    try {
      // verify를 통해 값 decode
      decoded = jwt.verify(token, secretKey);
      return decoded;
    }
    catch (err) {
      if (err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else {
        console.log('invalid token');
          return TOKEN_INVALID;
      }
    }
  }
}