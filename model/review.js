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

  
}