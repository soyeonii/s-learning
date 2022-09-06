module.exports = {
  searchAllUser: () => {
    return `
      SELECT
        *
      FROM
        user;
    ;`;
  },

  getPassword: (id) => {
    return `
      SELECT
        Password
      FROM
        user
      WHERE
        ID = '${id}'
    ;`;
  },

  insertUser: (user) => {
    return `
      INSERT INTO
        user
      (
        ID,
        Password,
        Detail
      )
      VALUES (
        '${user.id}',
        '${user.password}',
        '${user.detail}'
      )
    ;`;
  },


  searchUser: (id) => {
    return `
      SELECT
        *
      FROM
        user
      WHERE
        id = '${id}'
    ;`;
  },
}