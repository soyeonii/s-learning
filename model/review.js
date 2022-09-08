const qry = require('../config/query');
const con = require('../config/connection');
const pool = con.init();

module.exports = {

  searchByCaNo: async (ca) => {
    searchReviewByCaNoSql = qry.searchReviewByCaNo(ca.no);
    try{
      rows = await con.selectQuery(searchReviewByCaNoSql, pool);
      return rows;
    }
    catch(err) {throw err;}
  },

  
  insert: async (review) => {
    insertReviewSql = qry.insertReview(review);
    try{
      rows = await con.transactionQuery(insertReviewSql, pool);
      return rows;
    }
    catch(err) {throw err;}
  },

  // TODO : update 함수
  // rv_cd랑 user_id를 body로 받아서
  // 요청자(=user_id)랑 rv_cd의 user_id 비교 후 같으면 요청 수행
  
  // TODO : delete 함수
  // rv_cd랑 user_id를 body로 받아서
  // 요청자(=user_id)랑 rv_cd의 user_id 비교 후 같으면 요청 수행
}