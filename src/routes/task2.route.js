const { setData } = require("../controller/task2.controller");
const express = require("express");
const routes = express.Router();

routes.post("/setData", setData);

module.exports =  routes ;
