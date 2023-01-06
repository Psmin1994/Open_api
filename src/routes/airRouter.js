"use strict";

const express = require("express");
const airRouter = express.Router();

const airData = require("../utils/airdata");

// output
airRouter.get("/", (req, res) => {
  res.render("air/home", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
  });
});
airRouter.get("/help", (req, res) => {
  res.render("air/help", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
    message: "Hello",
  });
});
airRouter.get("/about", (req, res) => {
  res.render("air/about", {
    title: "미세먼지 정보 앱",
    name: "Psmin",
    email: "tkdals6405@gmail.com",
  });
});

// process
airRouter.post("/post", (req, res) => {
  airData(req.body.location, (air) => {
    return res.render("air/post", {
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

module.exports = airRouter;
