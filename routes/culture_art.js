const CultureArt = require("../model/culture_art");

module.exports = {

  // 문화예술회관 필터링 검색
  // city(도시코드), district(구코드) 받음
  // url:port/culture-arts?city=11&district=11050 형식으로 city, district 전달
  
  search: async (req, res) => {
    try {
      rows = await CultureArt.search(req.query);
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },

  // TODO : searchByCaNo 함수 생성
  // ca_no get으로 받으면 해당 문화회관 정보 다 반환해주기

  /***** searchByCaNo 함수 *****/


}