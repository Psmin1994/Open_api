// index.html 기본값 why?
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const airData = require("./src/utils/airdata");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/src/public`));

//route handler
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index1", (req, res) => {
  res.render("index1", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
    message: "Hello",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
  });
});
app.post("/air", (req, res) => {
  airData(req.body.location, (air) => {
    return res.render("air", {
      title: "미세먼지 정보 앱",
      name: "Psmin",
      email: "tkdals6405@gmail.com",
      location: req.body.location,
      time: air.dataTime,
      pm10: air.pm10Value,
      pm25: air.pm25Value,
    });
  });
});

// 앱 세팅
app.set("view engine", "ejs");
app.set("views", `${__dirname}/src/views`);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running port ${port}`);
}); // port number
