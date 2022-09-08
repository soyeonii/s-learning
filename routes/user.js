const User = require("../model/user");

module.exports = {

  mainView: (req, res) => {
    res.json("Hello World");
  },


  searchAll: async (req, res) => {
    try {
      rows = await User.searchAll();
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },
  

  searchById: async (req, res) => {
    try {
      rows = await User.searchById(req.params.id);
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


  insert: async (req, res) => {
    const user = {
      id: req.body.id,
      password: req.body.password,
      detail: req.body.detail || ''
    }

    try {
      if(user.id == '' || user.password == ''){
        return res.status(400).json("insert id or password!");
      }
      rows = await User.searchUser(user.id);
      if (Object.keys(rows).length > 0) {
        return res.status(400).json("the id is already exist");
      }
      
      rows = await User.insert(user);
      return res.json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },
  

  login: async (req, res) => {
    const user = {
      id: req.body.id,
      password: req.body.password
    }
    try {
      if(user.id == '' || user.password == ''){
        return res.status(400).json("insert id or password!")
      }
      rows = await User.login(user);
      return res.json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },
  

  verify: (req, res) => {
    try {
      rows = User.verify(req.body.token);
      return res.json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


}