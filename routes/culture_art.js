const CultureArt = require("../model/culture_art");

module.exports = {

  search: async (req, res) => {
    try {
      rows = await CultureArt.search(req.query);
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


}