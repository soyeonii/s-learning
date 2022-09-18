const qry = require("../config/query");
const errorCode = require("../config/error");
const con = require("../config/connection");
const pool = con.init();

module.exports = {
  searchLiked: async (perform_id) => {
    getPerformLikedSql = qry.getPerformLiked(perform_id);
    isUserLikedSql = qry.isUserLiked(perform_id, user_id);
    try {
      return (rows = {
        liked_cnt: await con.selectQuery(getPerformLikedSql, pool),
        is_liked: await con.selectQuery(isUserLikedSql, pool),
      });
    } catch (err) {
      throw err;
    }
  },

  // isUserLiked: async (perform_id, user_id) => {
  //   isUserLikedSql = qry.isUserLiked(perform_id, user_id);
  //   try {
  //     return await con.selectQuery(isUserLikedSql, pool);
  //   } catch (err) {
  //     throw err;
  //   }
  // },

  insert: async (perform_id, user_id) => {
    insertLikedSql = qry.insertLiked(perform_id, user_id);
    try {
      await con.transactionQuery(insertLikedSql, pool);
    } catch (err) {
      throw err;
    }
  },

  delete: async (perform_id, user_id) => {
    deleteLikedSql = qry.deleteLiked(review.rv_cd);
    try {
      await con.transactionQuery(deleteLikedSql, pool);
    } catch (err) {
      throw err;
    }
  },
};
