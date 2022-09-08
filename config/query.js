module.exports = {
  searchAllUser: () => {
    return `
      SELECT
        *
      FROM
        users.users;
    ;`;
  },

  getPasswordById: (id) => {
    return `
      SELECT
        Password
      FROM
        users.users
      WHERE
        ID = '${id}'
    ;`;
  },

  insertUser: (user) => {
    return `
      INSERT INTO
        users.users
      (
        ID,
        Password,
        Detail
      )
      VALUES
      (
        '${user.id}',
        '${user.password}',
        '${user.detail}'
      )
    ;`;
  },


  searchUserById: (id) => {
    return `
      SELECT
        *
      FROM
        users.users
      WHERE
        id = '${id}'
    ;`;
  },


  searchCultureArt: (filter) => {
    if(filter.city && filter.district) {
      return `
        SELECT
          SN AS ca_no,
          ctprvn_nm,
          signgu_nm,
          instt_nm,
          fclty_nm,
          rprsntv_nm,
          dues_ct,
          dues_unit_cn,
          addr,
          zip_no,
          tel_no,
          fax_no,
          hmpg_addr,
          sbscrb_yy,
          totar_mg,
          totar_yy,
          lo_val,
          la_val
        FROM
          culture_art.clturart_union_info
        WHERE
          ctprvn_cd = '${filter.city}' AND
          signgu_cd = '${filter.district}'
      ;`;
    }
    // 시군구코드, 시군구 명칭 district_cd, district_nm 으로 반환
    else if(filter.city) {
      return `
        SELECT
          signgu_cd AS district_cd,
          signgu_nm AS district_nm,
          count(*) AS ca_cnt
        FROM
          culture_art.clturart_union_info
        WHERE
          ctprvn_cd = '${filter.city}'
        GROUP BY
          signgu_nm
      ;`;
    }
    else return `
      SELECT
        ctprvn_cd AS city_cd,
        ctprvn_nm AS city_nm,
        count(*) AS ca_cnt
      FROM
        culture_art.clturart_union_info
      GROUP BY
        ctprvn_nm
    ;`;
  },


  searchUserById: (id) => {
    return `
      SELECT
        *
      FROM
        users.users
      WHERE
        id = '${id}'
    ;`;
  },

  // ca_no -> 문화예술회관 id number
  searchReviewByCaNo: (ca_no) => {
    return `
      SELECT
        *
      FROM
        review.review
      WHERE
        ca_no = '${ca_no}'
    ;`;
  },


  insertReview: (review) => {
    return `
      INSERT INTO
        review.review
      (
        user_id,
        ca_no,
        comment
      )
      VALUES
      (
        '${review.user_id}',
        '${review.ca_no}',
        '${review.comment}'
      )
    ;`;
  },
}