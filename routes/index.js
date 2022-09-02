const PORT = 3000;
const { swaggerUi, specs } = require("../swagger/swagger")
const controller = require("./controller");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */

/********************
 * controller 안에는
 * mainView 라는 값이 있고
 * 이걸 exports 했기 때문에
 * 불러오는게 가능하다.
 ********************/
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}))

app.get("/", controller.mainView);

app.get("/user", controller.searchAllUser);

app.get("/user/:id", controller.searchUser);

app.post("/user", controller.signUp);

app.post("/signin", controller.signIn);

app.post("/verify", controller.verify);

app.listen(PORT, '0.0.0.0', () => console.log('server has been running...'));