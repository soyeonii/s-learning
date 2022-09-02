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

  insertUser: (id, password, detail) => {
    return `
      INSERT INTO
        user
      (
        ID,
        Password,
        Detail
      )
      VALUES (
        '${id}',
        '${password}',
        '${detail}'
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