const { use } = require("express/lib/application");
const User = require("../model/user");

module.exports = {
  mainView: (req, res) => {
    res.status(200).json("Hello World");
  },

  // 모든 유저 검색
  searchAll: async (req, res) => {
    try {
      rows = await User.searchAll();
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // 유저 아이디 값으로 단일 검색
  searchById: async (req, res) => {
    try {
      rows = await User.searchById(req.params.id);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  // 유저 생성
  insert: async (req, res) => {
    const user = {
      id: req.body.id||'',
      password: req.body.password||'',
      sex: req.body.sex||0,
      age: req.body.age||'',
      nationality: req.body.nationality||0,
    }
    
    try {
      if(user.id == '' || user.password == '' || user.age == '') {
        return res.status(400).json("insert user details!");
      }
      rows = await User.searchUserById(user.id);
      if (Object.keys(rows).length > 0) {
        return res.status(400).json("the id is already exist");
      }

      rows = await User.insert(user);
      return res.status(201).json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // 로그인 => 세션 토큰 생성 후 반환
  login: async (req, res) => {
    const user = {
      id: req.body.id||"",
      password: req.body.password||""
    };
    try {
      if (user.id == "" || user.password == "") {
        return res.status(400).json("insert id or password!");
      }
      rows = await User.login(user);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // 세션 토큰 검사
  verify: (req, res) => {
    try {
      rows = User.verify(req.body.token);
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(401).json(err);
    }
  },

  // 유저 ID 수정
  update: async (req, res) => {
    try {
      const user = {
        original_id: req.params.original_id,
        password: req.body.password || "",
        change_id: req.body.change_id || ""
      }
      if(user.change_id == "") {
        return res.status(400).json("insert value!");
      }
      await User.update(user);
      return res.status(204).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },

  // 유저 회원탈퇴
  delete: async (req, res) => {
    try {
      const user = {
        id: req.params.id
      }
      await User.delete(user);
      return res.status(200).json();
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
