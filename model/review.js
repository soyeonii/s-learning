const qry = require("../config/query");
const con = require("../config/connection");
const pool = con.init();

module.exports = {
  searchByCaNo: async (ca) => {
    searchReviewByCaNoSql = qry.searchReviewByCaNo(ca);
    try {
      rows = await con.selectQuery(searchReviewByCaNoSql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  insert: async (review) => {
    insertReviewSql = qry.insertReview(review);
    try {
      rows = await con.transactionQuery(insertReviewSql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  // TODO : update 함수
  // rv_cd랑 user_id를 body로 받아서 -> review, user_id
  // 요청자(=user_id)랑 rv_cd의 user_id 비교 후 같으면 요청 수행
  update: async (review, user_id) => {
    if (review.rv_cd.substring(4, -3) != user_id) {
      throw "Review Update Failed";
    }
    updateReviewSql = qry.updateReview(review);
    try {
      await con.transactionQuery(updateReviewSql, pool);
    } catch (err) {
      throw err;
    }
  },

  // TODO : delete 함수
  // rv_cd랑 user_id를 body로 받아서
  // 요청자(=user_id)랑 rv_cd의 user_id 비교 후 같으면 요청 수행
  delete: async (rv_cd, user_id) => {
    if (rv_cd.substring(4, -3) != user_id) {
      throw "Review Delete Failed";
    }
    deleteReviewSql = qry.deleteReview(rv_cd);
    try {
      await con.transactionQuery(deleteReviewSql, pool);
    } catch (err) {
      throw err;
    }
  },
};
