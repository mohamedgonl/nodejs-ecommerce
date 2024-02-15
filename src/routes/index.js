"use strict";

const express = require("express");
const { apiKey, checkPermission } = require("../auth/checkAuth");
const route = express.Router();

route.use(apiKey);
route.use(checkPermission('0000'));
route.use("/v1/api", require("./access/index"));

module.exports = route;
