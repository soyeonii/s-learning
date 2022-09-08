const CultureArt = require("../model/culture_art");

module.exports = {

  // 문화예술회관 필터링 검색 /culture-arts?a=1&b=2 형식으로 a, b값 전달
  search: async (req, res) => {
    try {
      rows = await CultureArt.search(req.query);
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


}