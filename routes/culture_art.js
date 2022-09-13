const CultureArt = require("../model/culture_art");

module.exports = {
  // 문화예술회관 필터링 검색
  // city(도시코드), district(구코드) 받음
  // url:port/culture-arts?city=11&district=11050 형식으로 city, district 전달
  
  searchByCity: async (req, res) => {
    try {
      rows = await CultureArt.searchByCity(req.query);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  searchByDistrict: async (req, res) => {
    try {
      const ca = {
        district_cd: req.params.district_cd || "",
        list: req.params.list || 1,
      };
      if (
        ca.district_cd == ""
      ) {
        return res.status(400).json("insert district_cd!");
      }
      rows = await CultureArt.searchByDistrict(ca);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },


  /***** searchByCaNo 함수 *****/
  searchByCano: async (req, res) => {
    try {
      rows = await CultureArt.searchByCano(req.params.ca_no);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },


  /***** searchByFilter 함수 *****/
  searchByRank: async (req, res) => {
    try {
      const filter = {
        age_area: req.query.age_area || 10,
        sex: req.query.sex || 0,
        nationality: req.query.nationality || 0,
        list: req.params.list || 1,
      };
      rows = await CultureArt.searchByRank(filter);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
