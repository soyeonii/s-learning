const jwtlogic = require('../middleware/jwtlogic');
const qry = require('../config/query');
const errorCode = require('../config/error');
const con = require('../config/connection');
const pool = con.init();

module.exports = {

  search: async (filter) => {
    searchCultureArtSql = qry.searchCultureArt(filter);
    try{
      rows = await con.selectQuery(searchCultureArtSql, pool);
      return rows;
    }
    catch(err) {throw err;}
  },


  
}