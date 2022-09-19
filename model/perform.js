const qry = require("../config/query");
const errorCode = require("../config/error");
const con = require("../config/connection");
const pool = con.init();

module.exports = {
  searchLiked: async (perform) => {
    searchPerformLikedSql = qry.searchPerformLiked(perform);
    try {
      rows = await con.selectQuery(searchPerformLikedSql, pool);
      return rows;
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

  insertLiked: async (perform) => {
    insertPerformLikedSql = qry.insertPerformLiked(perform);
    try {
      await con.transactionQuery(insertPerformLikedSql, pool);
    } catch (err) {
      throw err;
    }
  },

  deleteLiked: async (perform) => {
    deletePerformLikedSql = qry.deletePerformLiked(perform);
    try {
      await con.transactionQuery(deletePerformLikedSql, pool);
    } catch (err) {
      throw err;
    }
  },

  searchByRank: async (filter) => {
    searchPFByRankSQL = qry.searchPFByRank(filter);
    try {
      rows = await con.selectQuery(searchPFByRankSQL, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },
};
