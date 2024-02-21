"use strict";

const express = require("express");
const accessController = require("../../controllers/access.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const route = express.Router();

route.post("/shop/signup", asyncHandler(accessController.signUp));
route.post("/shop/login", asyncHandler(accessController.login));

// authentication
route.use(authentication)
route.get('/shop/logout', asyncHandler(accessController.logout))
module.exports = route;
