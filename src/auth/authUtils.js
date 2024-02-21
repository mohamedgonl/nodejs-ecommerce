"use strict";
const JWT = require("jsonwebtoken");
const { asyncHandler } = require("../helpers/asyncHandler");
const { HEADER } = require("../constants/headers");
const { AuthFailureError, NotFoundError } = require("../core/error.response");
const KeyTokenService = require("../services/keyToken.service");
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "2 days",
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "7 days",
    });

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.error(`error: ` + err);
      } else {
        console.log("Decode ::::: ");
        console.log(decode);
      }
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {}
};

const authentication = asyncHandler(async (req, res, next) => {
  const userId = req.headers[HEADER.CLIENT_ID];
  if (!userId) throw new AuthFailureError("Invalid request");

  const keyStore = await KeyTokenService.findByUserId(userId);
  
  if (!keyStore) throw new NotFoundError("Not found keystore");
  
  const accessToken = req.headers[HEADER.AUTHORIZATION];
  
  if (!accessToken) throw new AuthFailureError("Invalid request");
  
  try {
    const decodeUser = JWT.verify(accessToken, keyStore.publicKey);
    
    if (userId !== decodeUser.userId)
    throw new AuthFailureError("Invalid user");
    req.keyStore = keyStore;
    next()
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = { createTokenPair, authentication };
