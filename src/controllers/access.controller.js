"use strict";

const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log(`[params]:::signUp:::`, req.body);
      return res.status(201).json( await AccessService.signUp(req.body));
    } catch (error) {
        console.log(error);
    }
  };
}

module.exports = new AccessController();
