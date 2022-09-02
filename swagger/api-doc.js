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
 *   /user:
 *     get:
 *       summary: "유저 데이터 전체 조회"
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
 *                   { "id": 1, "name": "유저1" },
 *                   { "id": 2, "name": "유저2" },
 *                   { "id": 3, "name": "유저3" },
 *                 ]
 */

/**
 * @swagger
 * paths:
 *   /signin:
 *     post:
 *       tags: [user]
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