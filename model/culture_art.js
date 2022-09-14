const jwtlogic = require("../middleware/jwtlogic");
const qry = require("../config/query");
const errorCode = require("../config/error");
const con = require("../config/connection");
const pool = con.init();

module.exports = {
  // TODO : searchCultureArt 쿼리 변경
  // 쿼리에서 내뱉는 ca_no랑 review 테이블의 ca_no를 교집합해서
  // 해당 ca_no 에 있는 review의 개수까지 추가로 보내주기
  searchCity: async () => {
    searchCitySql = qry.searchCity();
    try {
      rows = await con.selectQuery(searchCitySql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },


  searchDistrictByCity: async (ca) => {
    searchDistrictByCitySql = qry.searchDistrictByCity(ca);
    try {
      rows = await con.selectQuery(searchDistrictByCitySql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },


  searchByDistrict: async (ca) => {
    searchCAByDistrictSql = qry.searchCAByDistrict(ca);
    try {
      rows = await con.selectQuery(searchCAByDistrictSql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  searchByCano: async (ca_no) => {
    searchCultureArtSql = qry.searchCultureArtByCaNo(ca_no);
    try {
      rows = await con.selectQuery(searchCultureArtSql, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  searchByRank: async (filter) => {
    searchCAByRankSQL = qry.searchCAByRank(filter);
    try {
      rows = await con.selectQuery(searchCAByRankSQL, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  searchByDistance: async (filter) => {
    searchCAByDistance = qry.searchCAByDistance(filter);
    try {
      rows = await con.selectQuery(searchCAByDistance, pool);
      return rows;
    } catch (err) {
      throw err;
    }
  },
};
