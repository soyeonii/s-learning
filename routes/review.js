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
  insert: async (req, res) => {
    try {
      const review = {
        user_id:req.body.user_id||'',
        ca_no:req.body.ca_no||'',
        comment:req.body.comment||''
      }
      if(review.user_id == '' || review.ca_no == '' || review.comment == '') {
        return res.status(400).json("insert review!")
      }
      await Review.insert(review);
      return res.status(200).json();
    }
    catch(err){ return res.status(404).json(err); }
  },


}