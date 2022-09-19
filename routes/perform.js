const Perform = require("../model/perform");

module.exports = {
  searchLiked: async (req, res) => {
    try {
      const perform = {
        perform_id: req.params.perform_id || "",
        user_id: req.query.user_id || ""
      }
      rows = await Perform.searchLiked(perform);
      return res.status(200).json(rows);
    } catch (err) {
      res.status(404).json(err);
    }
  },

  // isUserLiked: async (req, res) => {
  //   try {
  //     const perform_id = req.params.perform_id || "";
  //     const user_id = req.params.user_id || "";
  //     if (perform_id == "" || user_id == "") {
  //       return res.status(400).json("insert perform_id and user_id!");
  //     }
  //     return res
  //       .status(200)
  //       .json(await Perform.isUserLiked(perform_id, user_id));
  //   } catch (err) {
  //     return res.status(404).json(err);
  //   }
  // },searchByRank

  insertLiked: async (req, res) => {
    try {
      const perform = {
        perform_id: req.params.perform_id,
        user_id: req.body.user_id || ""
      }
      if (perform.user_id == "") {
        return res.status(400).json("insert user_id!");
      }
      await Perform.insertLiked(perform);
      return res.status(201).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  deleteLiked: async (req, res) => {
    try {
      const perform = {
        perform_id: req.params.perform_id,
        user_id: req.body.user_id || ""
      }
      if (perform.user_id == "") {
        return res.status(400).json("insert user_id!");
      }
      await Perform.deleteLiked(perform);
      return res.status(200).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  searchByRank: async (req, res) => {
    try {
      const filter = {
        nationality: req.query.nationality || 0,
        age_area: req.query.age_area || 10,
        sex: req.query.sex || 0,
        list: req.params.list || 1,
      };
      rows = await Perform.searchByRank(filter);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
