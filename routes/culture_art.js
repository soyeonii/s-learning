const CultureArt = require("../model/culture_art");

module.exports = {
  // 문화예술회관 필터링 검색
  // city(도시코드), district(구코드) 받음
  // url:port/culture-arts?city=11&district=11050 형식으로 city, district 전달
  
  searchCity: async (req, res) => {
    try {
      rows = await CultureArt.searchCity();
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },


  searchDistrictByCity: async (req, res) => {
    try {
      const ca = {
        city_cd: req.params.city_cd
      };
      if (
        ca.city_cd == ""
      ) {
        return res.status(400).json("insert city_cd!");
      }
      rows = await CultureArt.searchDistrictByCity(ca);
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


  searchByCano: async (req, res) => {
    try {
      rows = await CultureArt.searchByCano(req.params.ca_no);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },


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
