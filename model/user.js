const { rejects } = require('assert');
const res = require('express/lib/response');
const jwtlogic = require('../middleware/jwtlogic');
const { request } = require('http');
const { resolve } = require('path');
const pool = require('../config/db').init();
const qry = require('../config/query');
const errorHttp = require('../config/error');

const transactionQuery = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if(err) reject(err);
      
      con.beginTransaction();
      con.query(sql, (err, rows) => {
        if(err) {
          con.rollback();
          con.release();
          reject(err);
          throw err;
        }
        
        con.commit();
        con.release();
        resolve(rows);
      });
    });
  })
}

const selectQuery = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if(err){
        con.release();
        reject(err);
      }
      con.query(sql, (err, rows) => {
        if(err){
          con.release();
          reject(err);
        }
        con.release();
        resolve(rows);
      });
    });
  })
}
/* ****
 * 쿼리 보내는 함수가 자주 나오는 것 같아
 * 가독성 향상을 위해
 * selectQuery 함수를 따로 만들었습니다.
***** */

module.exports = {

  search: async (id) => {
    searchUserSql = qry.searchUser(id);
    return new Promise(async (resolve, reject) => {
      try{
        rows = await selectQuery(searchUserSql);
        resolve(rows);
      }
      catch(err) { reject(err); }
    })
  },

  searchAllInfo: async () => {
    searchAllUserSql = qry.searchAllUser();
    
    return new Promise(async (resolve, reject) => {
      try{
        rows = await selectQuery(searchAllUserSql);
        resolve(rows);
      }
      catch(err) { reject(err); }
    })
  },


  signIn: async (id, password) => {
    getPasswordSql = qry.getPassword(id);
    
    return new Promise(async (resolve, reject) => {
      try{
        rows = await selectQuery(getPasswordSql);
        // password 가 틀리다면 throw로 err값 던진 후 reject 호출
        if(Object.keys(rows).length == 0){
          throw('the id doesn\'t exist!');
        }
        else if(rows[0]['Password'] != password){
          throw('password error!');
        } else { // 로그인 성공 + jwt 토큰 발급
          token = await jwtlogic.sign(id);
          resolve(token);
        }
      }
      catch(err) { reject(err); }
    })
  },

  
  signUp: async (id, password, detail) => {
    insertUserSql = await qry.insertUser(id, password, detail);

    return new Promise(async (resolve, reject) => {
      try{
        await transactionQuery(insertUserSql);
        resolve('Success');
      }
      catch(err) { reject(err); }
    })
  },

  
  searchUser: async (id) => {
    searchUserSql = await qry.searchUser(id);

    return new Promise(async (resolve, reject) => {
      try{
        rows = await selectQuery(searchUserSql);
        resolve(rows);
      }
      catch(err) { reject(err); }
    })
  },

  
  verify: async (token) => {
    return new Promise(async (resolve, reject) => {
      try{
        rows = await jwtlogic.verify(token);
        resolve(rows);
      }
      catch(err) { reject(err); }
    })
  },
}