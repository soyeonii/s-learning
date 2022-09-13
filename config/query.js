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
        Sex,
        Age,
        Nationality
      )
      VALUES
      (
        '${user.id}',
        '${user.password}',
        '${user.sex}',
        '${user.age}'
        '${user.nationality}'
      )
    ;`;
  },

  updateUser: (original_id, change_id) => {
    return `
      UPDATE
        users.users
      SET
        id = '${change_id}'
      WHERE
        id = '${original_id}'
    ;`;
  },

  deleteUser: (id) => {
    return `
      DELETE FROM
        users.users
      WHERE
        id = '${id}'
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

  searchCAByCity: (filter) => {
    // 구코드, 구명칭 district_cd, district_nm 으로 반환
    if (filter.city) {
      return `
        SELECT
          img_url,
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
    // 시 리스트 반환
    else
      return `
      SELECT
        ctprvn_cd AS city_cd,
        ctprvn_nm AS city_nm,
        count(*) AS ca_ct
      FROM
        culture_art.clturart_union_info
      GROUP BY
        ctprvn_nm
    ;`;
  },


  searchCAByDistrict: (ca) => {
    // 해당 구의 회관 리스트 반환
    return `
      SELECT
        SN AS ca_no,
        ctprvn_nm AS city_nm,
        signgu_nm AS district_nm,
        instt_nm,
        fclty_nm,
        ehbll_nm,
        eduspntd_nm,
        cinema_nm,
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
        la_val,
        (
          SELECT
            COUNT(*)
          FROM
            review.review
          WHERE
            ca_no = sn
        ) AS review_cnt
      FROM
        culture_art.clturart_union_info
      WHERE
        signgu_cd = '${ca.district_cd}'
      LIMIT
        ${(ca.list-1)*8}, 8
    ;`;
  },

  searchCultureArtByCaNo: (ca_no) => {
    return `
      SELECT
        *
      FROM
        culture_art.clturart_union_info
      WHERE
        sn = '${ca_no}'
    ;`;
  },

  searchCAByRank: (filter) => {
    return `
      CALL
        culture_art.analyse(
          '${filter.nationality == 0? 'lcls' : 'otsd'}',
          '${filter.age_area}',
          '${filter.sex == 0? 'male' : 'female'}',
          '${(filter.list-1)*8}'
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

  // ca_no -> 문화예술회관 id number
  searchReviewByCaNo: (ca) => {
    return `
      SELECT
        *
      FROM
        review.review
      WHERE
        ca_no = ${ca.no}
      LIMIT
        ${(ca.list-1)*8}, 8
    ;`;
  },

  insertReview: (review) => {
    return `
      INSERT INTO
        review.review
      (
        rv_cd,
        user_id,
        ca_no,
        comment
      )
      VALUES
      (
        '${review.rv_cd}',
        '${review.user_id}',
        '${review.ca_no}',
        '${review.comment}'
      )
    ;`;
  },

  updateReview: (review) => {
    return `
      UPDATE
        review.review
      SET
        comment = '${review.comment}'
      WHERE
        rv_cd = '${review.rv_cd}'
    ;`;
  },

  deleteReview: (rv_cd) => {
    return `
      DELETE FROM
        review.review
      WHERE
        rv_cd = '${rv_cd}'
    ;`;
  },
};
