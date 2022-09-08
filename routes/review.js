const Review = require("../model/review");

module.exports = {

  // culture art number 로 해당 문화예관의 모든 리뷰 검색
  searchByCaNo: async (req, res) => {
    try {
      const ca = {
        no:req.body.ca_no||''
      }
      if(ca.no == ''){
        return res.status(400).json("insert ca_no!")
      }
      rows = await Review.searchByCaNo(ca);
      return res.status(200).json(rows);
    }
    catch(err){ res.status(404).json(err); }
  },


  // 리뷰 생성
  // rv_cd 자동 카운트 하는 프로시저를 추후에 만들겠습니다.
  // 지금은 수동으로 기입해주세요.
  insert: async (req, res) => {
    try {
      const review = {
        rv_cd:req.body.rv_cd||'',
        user_id:req.body.user_id||'',
        ca_no:req.body.ca_no||'',
        comment:req.body.comment||''
      }
      if(review.rv_cd == '' || review.user_id == '' || review.ca_no == '' || review.comment == '') {
        return res.status(400).json("insert review!")
      }
      await Review.insert(review);
      return res.status(200).json();
    }
    catch(err){ return res.status(404).json(err); }
  },


}