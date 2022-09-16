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
      CALL users.insert(
        '${user.id}',
        '${user.password}',
        '${user.sex}',
        '${user.age}',
        '${user.nationality}'
      )
    ;`;
  },

  updateUser: (user) => {
    return `
      UPDATE
        users.users
      SET
        id = '${user.change_id}'
      WHERE
        id = '${user.original_id}'
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


  searchCity: () => {
    // 전체 시 코드 반환
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


  
  searchDistrictByCity: (ca) => {
    // 구코드, 구명칭 district_cd, district_nm 으로 반환
    return `
      SELECT
        img_url,
        signgu_cd AS district_cd,
        signgu_nm AS district_nm,
        count(*) AS ca_cnt
      FROM
        culture_art.clturart_union_info
      WHERE
        ctprvn_cd = '${ca.city_cd}'
      GROUP BY
        signgu_nm
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

  searchCAByDistance: (filter) => {
    return `
    SELECT
      *
    FROM
      culture_art.clturart_union_info
    WHERE
      sn = (SELECT
              sn
            FROM
              (CALL 
                culture_art.la_lo_distance(
                  '${filter.la}',
                  '${filter.lo}',
                  '${filter.distance}',
                  '${(filter.limit_start-1)*8}'
                )
              )
            )
    ;`;
  },

  searchUserById: (id) => {
    return `
      SELECT
        id,
        nationality,
        age,
        sex,
        agearea,
        memberid
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
        rv_cd,
        comment,
        (
          SELECT
            U.id
          FROM
            users.users U
          WHERE
            U.memberid = R.memberid
        ) AS id
      FROM
        review.review R
      WHERE
        RIGHT(rv_cd, 3) = ${ca.no}
      LIMIT
        ${(ca.list-1)*8}, 8
    ;`;
  },

  insertReview: (review) => {
    return `
      CALL
        review.insert(
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
