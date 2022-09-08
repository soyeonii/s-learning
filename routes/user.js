const User = require("../model/user");

module.exports = {

  mainView: (req, res) => {
    res.json("Hello World");
  },


  // 모든 유저 검색
  searchAll: async (req, res) => {
    try {
      rows = await User.searchAll();
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },
  

  // 유저 아이디 값으로 단일 검색
  searchById: async (req, res) => {
    try {
      rows = await User.searchById(req.params.id);
      return res.status(200).json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


  // 유저 생성
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
  

  // 로그인 => 세션 토큰 생성 후 반환
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
  

  // 세션 토큰 검사
  verify: (req, res) => {
    try {
      rows = User.verify(req.body.token);
      return res.json(rows);
    }
    catch(err){ return res.status(404).json(err); }
  },


}