const jwtlogic = require('../middleware/jwtlogic');
const qry = require('../config/query');
const errorCode = require('../config/error');
const con = require('../config/connection');
const pool = con.init();
con.check(pool);

module.exports = {
  search: async (id) => {
    searchUserSql = qry.searchUser(id);
    try{
      rows = await con.selectQuery(searchUserSql, pool);
      if(Object.keys(rows).length == 0){ // 해당 id가 없다면 throw
        throw('the user doesn\'t exist!');
      }
      return rows;
    }
    catch(err) {return err;}
  },


  searchAllInfo: async () => {
    searchAllUserSql = qry.searchAllUser();
    try{
      rows = await con.selectQuery(searchAllUserSql, pool);
      return rows;
    }
    catch(err) {return err;}
  },


  signIn: async (user) => {
    // 쿼리 내에서 비밀번호 검사 해야함 나중에 바꿀것
    getPasswordSql = qry.getPassword(user.id);
    try{
      rows = await con.selectQuery(getPasswordSql, pool);
      // password 가 틀리다면 throw로 err값 던진 후 reject 호출
      if(Object.keys(rows).length == 0){
        throw('the id doesn\'t exist!');
      }
      else if(rows[0]['Password'] != user.password){
        throw('password error!');
      }
      else { // 로그인 성공 + jwt 토큰 발급
        token = await jwtlogic.sign(user.id);
        return(token);
      }
    }
    catch(err) {return err;}
  },

  
  signUp: async (user) => {
    insertUserSql = qry.insertUser(user);
    try{
      await con.transactionQuery(insertUserSql, pool);
      return 'Success';
    }
    catch(err) {return err;}
  },

  
  searchUser: async (id) => {
    searchUserSql = qry.searchUser(id);
    try{
      rows = await con.selectQuery(searchUserSql, pool);
      return rows;
    }
    catch(err) {return err;}
  },

  
  verify: (token) => {
    try{
      rows = jwtlogic.verify(token);
      return rows;
    }
    catch(err) {return err;}
  },
}