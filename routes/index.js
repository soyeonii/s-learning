const PORT = 3000;
const { swaggerUi, specs } = require("../swagger/swagger")
const User = require("./user");
const CultureArt = require("./culture_art");
const Review = require("./review");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}))

app.get("/", User.mainView);

app.get("/users", User.searchAll);

app.post("/users", User.insert);

app.get("/users/:id", User.searchById);

app.post("/users/login", User.login);

app.post("/users/verify", User.verify);

app.get("/culture-arts", CultureArt.search);

app.post("/reviews/list", Review.searchByCaNo);

app.post("/reviews", Review.insert);

app.listen(PORT, '0.0.0.0', () => console.log('server has been running...'));