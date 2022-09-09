/**
 * @swagger
 * paths:
 *   /:
 *     get:
 *       summary: "홈페이지"
 *       description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *       tags: [home]
 *     responses:
 *       "200":
 *         description: "페이지 로드 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *             example:
 *               "Hello!"
 *
 */

/**
 * @swagger
 * paths:
 *   /users:
 *     get:
 *       summary: "유저 데이터 전체 조회"
 *       description: "서버에 데이터를 보내지 않고 Get 방식으로 요청"
 *       tags: [users]
 *       responses:
 *         "200":
 *           description: "데이터 조회 성공"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 [
 *                   { "id": 1, "name": "유저1" },
 *                   { "id": 2, "name": "유저2" },
 *                   { "id": 3, "name": "유저3" },
 *                 ]
 *
 */

/**
 * @swagger
 * paths:
 *   /users/signin:
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
 *           description: "아이디 불일치"
 *         "401":
 *           description: "비밀번호 불일치"
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
 *         "-1":
 *           description: "invalid token"
 *         "-2":
 *           description: "expired token"
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
 */
