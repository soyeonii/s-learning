const jwtlogic = require('../middleware/jwtlogic');
const qry = require('../config/query');
const errorCode = require('../config/error');
const con = require('../config/connection');
const pool = con.init();

module.exports = {

  // TODO : searchCultureArt 쿼리 변경
  // 쿼리에서 내뱉는 ca_no랑 review 테이블의 ca_no를 교집합해서
  // 해당 ca_no 에 있는 review의 개수까지 추가로 보내주기
  search: async (filter) => {
    searchCultureArtSql = qry.searchCultureArt(filter);
    try{
      rows = await con.selectQuery(searchCultureArtSql, pool);
      return rows;
    }
    catch(err) {throw err;}
  },


  
}