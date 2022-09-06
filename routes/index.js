const PORT = 3000;
const { swaggerUi, specs } = require("../swagger/swagger")
const controller = require("./controller");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api", swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}))

app.get("/", controller.mainView);

app.get("/user", controller.searchAllUser);

app.post("/user", controller.signUp);

app.get("/user/:id", controller.searchUser);

app.post("/signin", controller.signIn);

app.post("/verify", controller.verify);

app.listen(PORT, '0.0.0.0', () => console.log('server has been running...'));