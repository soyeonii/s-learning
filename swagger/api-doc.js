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
 *       tags: [users]
 *       summary: "유저 데이터 생성"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 {
 *                   "id": "newid",
 *                   "password": "1234",
 *                   "sex": "0",
 *                   "age": "25",
 *                   "nationality": "0",
 *                 }
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
 *   /users/{id}:
 *     get:
 *       tags: [users]
 *       summary: "id 값으로 유저 정보 출력"
 *       description: "서버에 데이터를 보내지 않고 Get 방식으로 요청"
 *       parameters:
 *         -  name: id
 *            in: path
 *            description: "id"
 *            required: true
 *            schema:
 *              type: string
 *            examples:
 *              Sample:
 *                value: "admin"
 *                summary: "admin"
 *            style: simple
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
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               example:
 *                 {"token": "blabla"}
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
 *   /culture-arts/city:
 *     get:
 *       tags: [culture-arts]
 *       summary: "시 코드 검색"
 *
 *       responses:
 *         "200":
 *           description: "모든 시와 각 시에 존재하는 예술회관의 수 반환"
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *               example:
 *                 [
 *                   {
 *                     "city_cd": "시 코드",
 *                     "city_nm": "시 이름",
 *                     "ca_ct": "해당 시에 있는 문화예술회관 수"
 *                   }
 *                ]
 *         "500":
 *           description: "서버 에러"
 *
 */

/**
 * @swagger
 * paths:
 *   /culture-arts/city/{city_cd}:
 *     get:
 *       tags: [culture-arts]
 *       summary: "시 코드로 구 검색"
 *       parameters:
 *         - name: city_cd
 *           in: path
 *           description: "city code"
 *           required: true
 *           schema:
 *             type: string
 *           examples:
 *             Sample1:
 *               value: "11"
 *               summary: "서울"
 *           style: simple
 *
 *       responses:
 *         "200":
 *           description: "city code를 보낼 시 해당 시의 각 구마다 존재하는 예술회관의 수 반환"
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *               example:
 *                 [
 *                   {
 *                     "district_cd": "구 코드",
 *                     "district_nm": "구 이름",
 *                     "ca_ct": "해당 시에 있는 문화예술회관 수"
 *                   }
 *                ]
 *         "400":
 *           description: "요청 에러"
 *         "500":
 *           description: "서버 에러"
 *
 */

/**
 * @swagger
 * paths:
 *   /culture-arts/district/{district_cd}/{list}:
 *     get:
 *       tags: [culture-arts]
 *       summary: "문화예술회관 구 코드로 검색"
 *       parameters:
 *         - name: district_cd
 *           in: path
 *           description: "district code"
 *           required: true
 *           schema:
 *             type: integer
 *           examples:
 *             Sample1:
 *               value: ""
 *               summary: "비우기"
 *             Sample2:
 *               value: "11050"
 *               summary: "광진구"
 *           style: simple
 *
 *         - name: list
 *           in: path
 *           description: "list number"
 *           required: true
 *           schema:
 *             type: integer
 *           examples:
 *             Sample1:
 *               value: "1"
 *               summary: "첫번째 리스트, 단위 8개"
 *             Sample2:
 *               value: ""
 *               summary: "비우기"
 *           style: simple
 *
 *       responses:
 *         "200":
 *           description: "district 로 검색 시 해당 구 모든 예술회관 정보 반환"
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
 *         "400":
 *           description: "요청 에러"
 *         "500":
 *           description: "서버 에러"
 *
 */

/**
 *  @swagger
 *  paths:
 *      /users/{original_id}:
 *          put:
 *              summary: "유저 정보 수정"
 *              description: "서버에 현재 아이디, 변경할 아이디를 전달해 PUT 방식으로 정보 수정"
 *              tags: [users]
 *              parameters:
 *                - name: original_id
 *                  in: path
 *                  description: "원래 아이디"
 *                  required: true
 *                  schema:
 *                    type: string
 *                  examples:
 *                    Sample1:
 *                      value: "knox"
 *                      summary: "knox"
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "password": "1111", "change_id": "newid" }
 *              responses:
 *                  "204":
 *                      description: "유저 ID 수정 성공"
 *                  "404":
 *                      description: "변경할 ID 미입력"
 *                  "400":
 *                      description: "이미 존재하는 ID"
 */

/**
 *  @swagger
 *  paths:
 *      /users/{id}:
 *          delete:
 *              summary: "유저 정보 삭제"
 *              description: "서버에 로그인 중인 아이디를 전달해 DELETE 방식으로 정보 삭제"
 *              tags: [users]
 *              parameters:
 *                - name: id
 *                  in: path
 *                  description: "user id (pk)"
 *                  required: true
 *                  schema:
 *                    type: string
 *                  examples:
 *                    Sample1:
 *                      value: "userid1234"
 *                      summary: "id"
 *
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
 *          post:
 *              summary: "리뷰 생성"
 *              description: "서버에 리뷰 정보, 유저 ID, ca_no를 전달해 POST 방식으로 리뷰 생성"
 *              tags: [reviews]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  { "user_id": "아이디", "ca_no": "문화예술회관코드", "comment": "리뷰 내용" }
 *              responses:
 *                  "201":
 *                      description: "리뷰 내용 미입력"
 *                  "400":
 *                      description: "리뷰 내용 미입력"
 *                  "404":
 *                      description: "서버 에러"
 *
 * */

/**
 *  @swagger
 *  paths:
 *      /reviews/{rv_cd}:
 *           put:
 *              summary: "리뷰 내용 수정"
 *              description: "서버에 리뷰 code와 새로운 리뷰 내용 전송, PUT 방식으로 리뷰 수정"
 *              tags: [reviews]
 *              parameters:
 *                - name: rv_cd
 *                  in: path
 *                  description: "review code (pk)"
 *                  required: true
 *                  schema:
 *                    type: string
 *                  examples:
 *                    Sample1:
 *                      value: "0001admin001"
 *                      summary: "rv_cd"
 *
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  {"comment": "changed comment" }
 *              responses:
 *                  "204":
 *                      description: "리뷰 수정 성공"
 *                  "400":
 *                      description: "리뷰 내용 미입력"
 *                  "404":
 *                      description: "리뷰 수정 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /reviews/{rv_cd}:
 *          delete:
 *              summary: "리뷰 삭제"
 *              description: "서버에 rv_cd를 전달해 DELETE 방식으로 리뷰 삭제"
 *              tags: [reviews]
 *              parameters:
 *                - name: rv_cd
 *                  in: path
 *                  description: "review code (pk)"
 *                  required: true
 *                  schema:
 *                    type: string
 *                  examples:
 *                    Sample1:
 *                      value: "0001admin001"
 *                      summary: "rv_cd"
 *
 *              responses:
 *                  "200":
 *                      description: "리뷰 삭제 성공"
 *                  "404":
 *                      description: "리뷰 삭제 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /reviews/{ca_no}/{list}:
 *          get:
 *              summary: "해당 예술회관의 리뷰 검색"
 *              description: "ca_no로 해당 예술회관에 달린 모든 리뷰 조회"
 *              tags: [reviews]
 *              parameters:
 *                  - name: ca_no
 *                    in: path
 *                    description: "ca_no"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "1번 예술회관"
 *                    style: simple
 *                  - name: list
 *                    in: path
 *                    description: "리스트 번호 (단위 : 8) 1부터 시작"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "상위 1~8번째 리뷰 리스트"
 *                        Sample2:
 *                            value: 2
 *                            summary: "상위 9~16번째 리뷰 리스트"
 *                    style: simple
 *              responses:
 *                  "200":
 *                      description: "리뷰 조회 성공"
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  example:
 *                                      {
 *                                          { "rv_cd": "0001admin001", "user_id": "admin" , "ca_no": "1", "comment": "좋아요"},
 *                                          { "rv_cd": "0001admin002", "user_id": "admin" , "ca_no": "1", "comment": "good!"}
 *                                      }
 *                  "400":
 *                      description: "요청 오류"
 *                  "404":
 *                      description: "서버 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /culture-arts/{ca_no}:
 *          get:
 *              tags: [culture-arts]
 *              summary: "문화예술회관 정보 출력"
 *              description: "서버에 ca_no을 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: ca_no
 *                    in: path
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

/**
 *  @swagger
 *  paths:
 *      /culture-arts/rank/{list}:
 *          get:
 *              tags: [culture-arts]
 *              summary: "문화예술회관 상위 필터링 검색"
 *              description: "서버에 age_area, sex, nationality 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: list
 *                    in: path
 *                    description: "리스트 번호 (단위 : 8) 1부터 시작"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "상위 1~8번째 회관 리스트"
 *                        Sample2:
 *                            value: 2
 *                            summary: "상위 9~16번째 회관 리스트"
 *                    style: simple
 *
 *                  - name: age_area
 *                    in: query
 *                    description: "연령대"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 10
 *                            summary: "10대"
 *                    style: simple
 *
 *                  - name: sex
 *                    in: query
 *                    description: "성별 남:0, 여:1"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "남성"
 *                    style: simple
 *
 *                  - name: nationality
 *                    in: query
 *                    description: "국적 내:0, 외:1"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "내국인"
 *                    style: simple
 *
 *              responses:
 *                  "200":
 *                      description: "문화예술회관 상위 정보 출력 성공"
 *                  "404":
 *                      description: "문화예술회관 정보 출력 오류"
 *
 *
 *
 */

/**
 *  @swagger
 *  paths:
 *      /culture-arts/distance/{list}:
 *          get:
 *              tags: [culture-arts]
 *              summary: "문화예술회관 위치 반경 필터링 검색"
 *              description: "서버에 la, lo, distance, limit_start 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: la
 *                    in: query
 *                    description: "위도"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1004
 *                            summary: "위도 : 1004"
 *                    style: simple
 *
 *                  - name: lo
 *                    in: query
 *                    description: "경도"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 1004
 *                            summary: "경도 : 1004"
 *                    style: simple
 *
 *                  - name: distance
 *                    in: query
 *                    description: "최대 반경 제한"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 10000
 *                            summary: "최대 반경 제한 : 10000"
 *                    style: simple
 *
 *                  - name: list_start
 *                    in: path
 *                    description: "리스트 번호 (단위 : 8) 1부터 시작"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "상위 1~8번째 회관 리스트"
 *                        Sample2:
 *                            value: 2
 *                            summary: "상위 9~16번째 회관 리스트"
 *                    style: simple
 *
 *              responses:
 *                  "200":
 *                      description: "문화예술회관 상위 정보 출력 성공"
 *                  "404":
 *                      description: "문화예술회관 정보 출력 오류"
 *
 *
 *
 */

/**
 *  @swagger
 *  paths:
 *      /culture-arts/rank/{list}:
 *          get:
 *              tags: [culture-arts]
 *              summary: "문화예술회관 상위 필터링 검색"
 *              description: "서버에 age_area, sex, nationality 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: list
 *                    in: path
 *                    description: "리스트 번호 (단위 : 8) 1부터 시작"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "상위 1~8번째 회관 리스트"
 *                        Sample2:
 *                            value: 2
 *                            summary: "상위 9~16번째 회관 리스트"
 *                    style: simple
 *
 *                  - name: age_area
 *                    in: query
 *                    description: "연령대"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 10
 *                            summary: "10대"
 *                    style: simple
 *
 *                  - name: sex
 *                    in: query
 *                    description: "성별 남:0, 여:1"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "남성"
 *                    style: simple
 *
 *                  - name: nationality
 *                    in: query
 *                    description: "국적 내:0, 외:1"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "내국인"
 *                    style: simple
 *
 *              responses:
 *                  "200":
 *                      description: "문화예술회관 상위 정보 출력 성공"
 *                  "404":
 *                      description: "문화예술회관 정보 출력 오류"
 *
 *
 *
 */

/**
 *  @swagger
 *  paths:
 *      /performs/liked/{perform_id}:
 *          get:
 *              tags: [performs]
 *              summary: "공연 좋아요 수, 해당 유저가 누른 상태인지 조회"
 *              description: "서버에 perform_id 를 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: perform_id
 *                    in: path
 *                    description: "공연 ID"
 *                    required: true
 *                    schema:
 *                        type: string
 *                    examples:
 *                        Sample1:
 *                            value: "P1234567"
 *                            summary: "perform_id"
 *                    style: simple
 * 
 *                  - name: user_id
 *                    in: query
 *                    description: "공연 ID"
 *                    required: false
 *                    schema:
 *                        type: string
 *                    examples:
 *                        Sample1:
 *                            value: ""
 *                            summary: "비우기"
 *                        Sample2:
 *                            value: "P1234567"
 *                            summary: "perform_id"
 *                    style: simple
 * 
 *              responses:
 *                  "200":
 *                      description: "공연 좋아요 정보 출력 성공(liked_cnt : 좋아요 수"
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: string
 *                                  example:
 *                                      { liked_cnt: 13 , check_liked: 0}
 *                                  summary: "liked_cnt : 좋아요 수"
 *                  "404":
 *                      description: "서버/DB 로직 에러"
 */

/**
 *  @swagger
 *  paths:
 *      /performs/liked/{perform_id}:
 *          post:
 *              tags: [performs]
 *              summary: "좋아요 등록"
 *              description: "서버에 perform_id, user_id를 전달해 POST 방식으로 좋아요 등록"
 *              parameters:
 *                  - name: perform_id
 *                    in: path
 *                    description: "공연 ID"
 *                    required: true
 *                    schema:
 *                        type: string
 *                    examples:
 *                        Sample1:
 *                            value: P1234567
 *                            summary: "perform_id"
 *                    style: simple
 *              requestBody:
 *                  required: true
 *                  description: "유저 ID"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  {
 *                                      "user_id":"admin"
 *                                  }
 *                  style: simple
 *              responses:
 *                  "201":
 *                      description: "공연 좋아요 등록 성공"
 *                  "404":
 *                      description: "공연 좋아요 등록 오류"
 */

/**
 *  @swagger
 *  paths:
 *      /performs/liked/{perform_id}:
 *          delete:
 *              tags: [performs]
 *              summary: "좋아요 취소"
 *              description: "서버에 perform_id, user_id를 전달해 DELETE 방식으로 좋아요 취소"
 *              parameters:
 *                  - name: perform_id
 *                    in: path
 *                    description: "공연 ID"
 *                    required: true
 *                    schema:
 *                        type: string
 *                    examples:
 *                        Sample1:
 *                            value: P1234567
 *                            summary: "perform_id"
 *                    style: simple
 *              requestBody:
 *                  required: true
 *                  description: "유저 ID"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              example:
 *                                  {
 *                                      "user_id":"admin"
 *                                  }
 *                  style: simple
 *              responses:
 *                  "200":
 *                      description: "공연 좋아요 취소 성공"
 *                  "404":
 *                      description: "공연 좋아요 취소 오류"
 */


/**
 *  @swagger
 *  paths:
 *      /performs/rank/{list}:
 *          get:
 *              tags: [performs]
 *              summary: "공연 상위 필터링 검색"
 *              description: "서버에 nationality, age_area, sex, list 전달해 GET 방식으로 정보 출력"
 *              parameters:
 *                  - name: list
 *                    in: path
 *                    description: "리스트 번호 (단위 : 8) 1부터 시작"
 *                    required: true
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample1:
 *                            value: 1
 *                            summary: "상위 1~8번째 회관 리스트"
 *                        Sample2:
 *                            value: 2
 *                            summary: "상위 9~16번째 회관 리스트"
 *                    style: simple
 *
 *                  - name: nationality
 *                    in: query
 *                    description: "국적 내:0, 외:1"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "내국인"
 *                    style: simple
 * 
 *                  - name: age_area
 *                    in: query
 *                    description: "연령대"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 10
 *                            summary: "10대"
 *                    style: simple
 *
 * 
 *                  - name: sex
 *                    in: query
 *                    description: "성별 남:0, 여:1"
 *                    required: false
 *                    schema:
 *                        type: integer
 *                    examples:
 *                        Sample:
 *                            value: 0
 *                            summary: "남성"
 *                    style: simple
 *
 *              responses:
 *                  "200":
 *                      description: "문화예술회관 상위 정보 출력 성공"
 *                  "404":
 *                      description: "문화예술회관 정보 출력 오류"
 *
 *
 *
 */