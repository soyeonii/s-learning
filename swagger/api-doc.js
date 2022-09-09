/**
 * @swagger
 * paths:
 *   /:
 *     get:
 *       tags: [home]
 *       summary: "홈페이지"
 *       description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *       responses:
 *         "200":
 *           description: "페이지 로드 성공"
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *               example:
 *                 "Hello!"
 * 
 */

/**
 * @swagger
 * paths:
 *   /users:
 *     get:
 *       tags: [users]
 *       summary: "유저 데이터 전체 조회"
 *       description: "서버에 데이터를 보내지 않고 Get 방식으로 요청"
 *       responses:
 *         "200":
 *           description: "데이터 조회 성공"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 [
 *                   { 
                       "ID": "admin",
                       "Password": "1234",
                       "Sex": 1,
                       "Age": 15,
                       "AgeArea": 30
                     },
 *                   { 
                       "ID": "soyeon",
                       "Password": "1234",
                       "Sex": 1,
                       "Age": 32,
                       "AgeArea": 30
                     },
 *                 ]
 *         "500":
 *           description: "서버 에러"
 *     post:
 *       tags: [user]
 *       summary: "유저 데이터 생성"
 *       parameters:
 *         - name: id
 *           in: body
 *           description: 사용자 아이디 (primary key)
 *           required: true
 *           schema:
 *             type: string
 *           examples:
 *             Sample:
 *               value: "kw8384"
 *               summary: "id"
 *           style: simple
 * 
 *         - name: password
 *           in: body
 *           description: "사용자 비밀번호 (추후에 없애도 될듯)"
 *           required: true
 *           schema:
 *             type: string
 *           examples:
 *             Sample:
 *               value: "qwe123!"
 *               summary: "password"
 *           style: simple
 * 
 *         - name: sex
 *           in: body
 *           description: "사용자 성별 남:0, 여1"
 *           required: true
 *           schema:
 *             type: int
 *           examples:
 *             Sample:
 *               value: "1"
 *               summary: "여성"
 *           style: simple
 * 
 *         - name: age
 *           in: body
 *           description: "사용자 연령"
 *           required: true
 *           schema:
 *             type: int
 *           examples:
 *             Sample:
 *               value: "32"
 *               summary: "32살"
 *           style: simple
 * 
 *       responses:
 *         "201":
 *           description: "생성 성공"
 *         "400":
 *           description: "요청 데이터 오류 ex)빈 데이터, 아이디 중복"
 *         "500":
 *           description: "서버 에러"
 * 
 */


/**
 * @swagger
 * paths:
 *   /users/:id:
 *     get:
 *       summary: "id 값으로 유저 정보 출력"
 *       description: "서버에 데이터를 보내지 않고 Get 방식으로 요청"
 *       tags: [user]
 *       responses:
 *         "200":
 *           description: "데이터 조회 성공"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 [
 *                   {
 *                     "ID": "admin",
 *                     "Password": "1234",
 *                     "Sex": 1,
 *                     "Age": 35,
 *                      "AgeArea": 30
 *                   }
 *                 ]
 *         "404":
 *           description: "해당 데이터 없음"
 * 
 * 
 */

/**
 * @swagger
 * paths:
 *   /users/login:
 *     post:
 *       tags: [users]
 *       summary: "로그인 로직 처리"
 *       parameters:
 *         - name: id
 *           in: body
 *           description: 사용자가 입력한 아이디
 *           required: true
 *           schema:
 *             type: string
 *           examples:
 *             Sample:
 *               value: "sku2018"
 *               summary: "example"
 *           style: simple
 *
 *         - name: password
 *           in: body
 *           description: "password"
 *           required: true
 *           schema:
 *             type: string
 *           examples:
 *             Sample:
 *               value: "qwe123!"
 *               summary: "example"
 *           style: simple
 *
 *       responses:
 *         "200":
 *           description: "로그인 성공"
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *               example:
 *                 [
 *                   { "access_token": "blabla" }
 *                 ]
 *         "400":
 *           description: "요청 데이터 오류"
 *         "500":
 *           description: "서버 에러"
 * 
 */

 /**
  * @swagger
  * paths:
  *   /users/verify:
  *     post:
  *       tags: [users]
  *       summary: "액세스 토큰 확인"
  *       parameters:
  *         - name: token
  *           in: body
  *           description: "액세스 토큰 확인"
  *           required: true
  *           schema:
  *             type: string
  *           examples:
  *             Sample:
  *               value: "zXc325vcakslaxqopweisqws"
  *               summary: "token"
  *           style: simple
  * 
  *       responses:
  *         "200":
  *           description: "토큰 일치"
  *         "401":
  *           description: "(-1)invalid token or (-2)expired token"
  * 
  */


/**
 * @swagger
 * paths:
 *   /culture-arts:
 *     get:
 *       tags: [culture-art]
 *       summary: "문화예술회관 필터링 검색"
 *       parameters:
 *         - name: city
 *           in: query
 *           description: "city code"
 *           required: false
 *           schema:
 *             type: string
 *           examples:
 *             Sample1:
 *               value: "11"
 *               summary: "서울"
 *             Sample2:
 *               value: ""
 *               summary: "비우기"
 *           style: simple
 * 
 *         - name: district
 *           in: query
 *           description: "district code"
 *           required: false
 *           schema:
 *             type: string
 *           examples:
 *             Sample1:
 *               value: ""
 *               summary: "비우기"
 *             Sample2:
 *               value: "11050"
 *               summary: "광진구"
 *           style: simple
 *
 *       responses:
 *         "200":
 *           description: "district 로 검색 시 해당 구 모든 예술회관 정보 반환, city 만 보낼 시 해당 시의 각 구마다 존재하는 예술회관의 수 반환, 아무 것도 보내지 않을 시 모든 시와 각 시에 존재하는 예술회관의 수 반환"
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *               example:
 *                 [
 *                   {
 *                     "city_cd": "시 코드",
 *                     "city_nm": "시 이름",
 *                     "district_cd": "구 코드",
 *                     "district_nm": "구 이름",
 *                     "ca_ct": "각 구역 단위 예술회관 수",
 *                     "ca_no": "예술회관 코드",
 *                     "instt_nm": "운영기관명",
 *                     "fclty_nm": "시설명",
 *                     "ehbll_nm": "전시장 유무 (Y or N)",
 *                     "eduspntd_nm": "교육장 유무 (Y or N)",
 *                     "cinema_nm": "영화관 유무 (Y or N)",
 *                     "rprsntv_nm": "대표자",
 *                     "dues_ct": "회비 (int)",
 *                     "dues_unit_cn": "회비 단위 (string)",
 *                     "addr": "주소",
 *                     "zip_no": "우편번호",
 *                     "tel_no": "전화번호",
 *                     "fax_no": "대표팩스",
 *                     "hmpg_addr": "홈페이지",
 *                     "sbscrb_yy": "개관년도",
 *                     "totar_mg": "연면적 (float)",
 *                     "totar_yy": "면적단위 (string) ex: (m²)",
 *                     "lo_val": "경도 (float)",
 *                     "la_val": "위도 (float)"
 *                   }
 *                ]
 *         "500":
 *           description: "서버 에러"
 *
 */

/**
 *  @swagger
 *  paths:
 *      /users:
 *          put:
 *              summary: "유저 정보 수정"
 *              description: "서버에 현재 아이디, 변경할 아이디를 전달해 PUT 방식으로 정보 수정"
 *              tags: [users]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "original_id": "1111", "change_id": "1234" }
 *              responses:
 *                  "200":
 *                      description: "유저 ID 수정 성공"
 *                  "404":
 *                      description: "변경할 ID 미입력"
 *                  "400":
 *                      description: "이미 존재하는 ID"
 */

/**
 *  @swagger
 *  paths:
 *      /users:
 *          delete:
 *              summary: "유저 정보 삭제"
 *              description: "서버에 로그인 중인 아이디를 전달해 DELETE 방식으로 정보 삭제"
 *              tags: [users]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "id": "1111" }
 *              responses:
 *                  "200":
 *                      description: "유저 정보 삭제 성공"
 *                  "400":
 *                      description: "유저 정보 삭제 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /reviews:
 *          put:
 *              summary: "리뷰 내용 수정"
 *              description: "서버에 리뷰 정보, 유저 ID를 전달해 PUT 방식으로 리뷰 수정"
 *              tags: [reviews]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "rv_cd": "0001admin001", "user_id": "admin", "ca_no": 1, "comment": "My first comment" }
 *              responses:
 *                  "200":
 *                      description: "리뷰 수정 성공"
 *                  "404":
 *                      description: "리뷰 내용 미입력"
 *                  "400":
 *                      description: "리뷰 수정 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /reviews:
 *          delete:
 *              summary: "리뷰 삭제"
 *              description: "서버에 rv_cd, 유저 ID를 전달해 DELETE 방식으로 리뷰 삭제"
 *              tags: [reviews]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "rv_cd": "0001admin001", "user_id": "admin" }
 *              responses:
 *                  "200":
 *                      description: "리뷰 삭제 성공"
 *                  "400":
 *                      description: "리뷰 삭제 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /culture-arts:
 *          get:
 *              tags: [culture-arts]
 *              summary: "문화예술회관 정보 출력"
 *              description: "서버에 ca_no을 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: ca_no
 *                    in: body
 *                    description: "ca_no"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 1
 *                            summary: "ca_no"
 *                    style: simple
 *              responses:
 *                  "200":
 *                      description: "문화예술회관 정보 출력 성공"
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: string
 *                                  example:
 *                                      { "sn": 1, "branch_nm": "서울 인천" }
 *                  "400":
 *                      description: "문화예술회관 정보 출력 오류"
 *
 *
 * 
 */
