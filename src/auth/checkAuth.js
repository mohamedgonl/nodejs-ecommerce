"use strict";

const { findApiKeyById } = require("../services/apikey.service");

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};
const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.json({
        message: "Forbidden Error",
      });
    }
    const objKey = await findApiKeyById(key);
    if (!objKey) {
      return res.status(403).json({
        message: "Forbidden Error",
      });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const checkPermission = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }

    console.log("permission ::: ", req.objKey.permissions);
    const validPermission = req.objKey.permissions.includes(permission);
    if (!validPermission) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }

    return next()
  };
};

const asyncHandler = fn => {
  return (req,res, next) => {
    fn(req,res,next).catch(next)
  }
}

module.exports = { apiKey, checkPermission , asyncHandler};