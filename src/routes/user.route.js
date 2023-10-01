const { addUser } = require("../controller/user.controller");
const express = require("express");
const routes = express.Router();

routes.post("/create_user", addUser);

module.exports =  routes ;
