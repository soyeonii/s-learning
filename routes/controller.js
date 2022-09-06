const User = require("../model/user");

module.exports = {

  mainView: (req, res) => {
    res.json("Hello World");
  },


  searchAllUser: async (req, res) => {
    try {
      rows = await User.searchAllInfo();
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  },
  

  searchUser: async (req, res) => {
    try {
      rows = await User.search(req.params.id);
      return res.json(rows);
    }
    catch(err){ console.log(err);res.json(err); }
  },


  signUp: async (req, res) => {
    const user = {
      id: req.body.id,
      password: req.body.password,
      detail: req.body.detail || ''
    }

    try {
      if(user.id == '' || user.password == ''){
        throw "insert id or password!"
      }
      rows = await User.searchUser(user.id);
      if (Object.keys(rows).length > 0) {
        throw "the id is already exist"
      }
      
      rows = await User.signUp(user);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  },
  

  signIn: async (req, res) => {
    const user = {
      id: req.body.id,
      password: req.body.password
    }
    try {
      if(user.id == '' || user.password == ''){
        throw "insert id or password!"
      }
      rows = await User.signIn(user);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  },
  

  verify: (req, res) => {
    try {
      rows = User.verify(req.body.token);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  }
}