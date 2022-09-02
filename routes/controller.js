const User = require("../model/user");
const axios = require('axios');

module.exports = {

  mainView: (req, res) => {
    res.json("Hello World");
  },


  searchAllUser: async (req, res) => {
    try {
      rows = await User.searchAllInfo();
      //  + model 로 변환 로직 구현
      return res.json(rows);

    }
    catch(err){ return err; }
  },
  

  searchUser: async (req, res) => {
    try {
      rows = await User.search(req.params.id);
      //  + model 로 변환 로직 구현
      return res.json(rows);
    }
    catch(err){ return err; }
  },


  signUp: async (req, res) => {
    try {
      // 추후에 model 로 변환 로직 구현
      const user = {
        id: req.body.id,
        password: req.body.password,
        detail: req.body.detail || ''
      }
      
      if(user.id == '' || user.password == ''){
        throw "insert id or password!"
      }
      rows = await User.searchUser(user.id);
      if (Object.keys(rows).length > 0) {
        throw "the id is already exist"
      }
      
      rows = await User.signUp(user.id, user.password, user.detail);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  },
  

  signIn: async (req, res) => {
    try {
      rows = await User.signIn(req.body.id, req.body.password);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  },
  

  verify: async (req, res) => {
    try {
      rows = await User.verify(req.body.token);
      return res.json(rows);
    }
    catch(err){ res.json(err); }
  }
}