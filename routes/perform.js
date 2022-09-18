const Perform = require("../model/perform");

module.exports = {
  searchLiked: async (req, res) => {
    try {
      const perform_id = req.params.perform_id || "";
      const user_id = req.body.user_id || "";
      if (perform_id == "" || user_id == "") {
        return res.status(400).json("insert perform_id and user_id!");
      }
      return res
        .status(200)
        .json(await Perform.searchLiked(perform_id, user_id));
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
  // },

  insert: async (req, res) => {
    try {
      const perform_id = req.params.perform_id || "";
      const user_id = req.body.user_id || "";
      if (perform_id == "" || user_id == "") {
        return res.status(400).json("insert perform_id and user_id!");
      }
      await Perform.insert(perform_id, user_id);
      return res.status(201).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const perform_id = req.params.perform_id || "";
      const user_id = req.body.user_id || "";
      if (perform_id == "" || user_id == "") {
        return res.status(400).json("insert perform_id and user_id!");
      }
      await Perform.delete(perform_id, user_id);
      return res.status(204).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
