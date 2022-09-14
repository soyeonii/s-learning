const PORT = 3000;
const cors = require('cors');
const { swaggerUi, specs } = require("../swagger/swagger");
const User = require("./user");
const CultureArt = require("./culture_art");
const Review = require("./review");
const express = require("express");
const app = express();

// 미들웨어
app.use(cors()); // CORS 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 스웨거 페이지
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.get("/", User.mainView);

// 유저 정보
app.get("/users", User.searchAll);

// 유저 생성
app.post("/users", User.insert);

// 유저 수정
app.put("/users/:original_id", User.update);

// 유저 삭제
app.delete("/users/:id", User.delete);

// id값으로 유저 정보 출력
app.get("/users/:id", User.searchById);

// 유저 로그인 => 세션토큰 출력
app.post("/users/login", User.login);

// 세션토큰 검사
app.post("/users/verify", User.verify);

// 모든 시 검색
app.get("/culture-arts/city", CultureArt.searchCity);

// 문화예술회관 시 코드로 검색
app.get("/culture-arts/city/:city_cd", CultureArt.searchDistrictByCity);

// 문화예술회관 구 코드로 검색
app.get("/culture-arts/district/:district_cd/:list", CultureArt.searchByDistrict);

// 문화예술회관 필터링 검색
app.get("/culture-arts/rank/:list", CultureArt.searchByRank);

// ca_no값으로 문화예술회관 정보 출력
app.get("/culture-arts/:ca_no", CultureArt.searchByCano);

// distance값으로 문화예술회관 필터링 검색
app.get("/culture-arts/distance/:list", CultureArt.searchByDistance);

// 리뷰 검색
app.get("/reviews/:ca_no/:list", Review.searchByCaNo);

// 리뷰 생성
app.post("/reviews", Review.insert);

// 리뷰 수정
app.put("/reviews/:rv_cd", Review.update);

// 리뷰 삭제
app.delete("/reviews/:rv_cd", Review.delete);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`server has been running... http://localhost:${PORT}/`)
);
