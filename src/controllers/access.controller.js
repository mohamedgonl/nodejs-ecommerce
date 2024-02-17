"use strict";

const { CREATED, SuccessResponse } = require("../core/successs.response");
const AccessService = require("../services/access.service");

class AccessController {
  login = async (req, res, next) => {
    new SuccessResponse({
      metadata: await AccessService.login(req.body)
    }).send(res);
  };

  signUp = async (req, res, next) => {
    new CREATED({
      message: "Register OK",
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
