"use strict";

const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken,
  }) => {
    try {
      // const publicKeyString = publicKey.toString();
      // const tokens = await  keytokenModel.create({
      //     user: userId,
      //     publicKey: publicKeyString
      // })
      // return tokens ? publicKeyString: null;
      const filters = { user: userId };
      const update = {
        publicKey,
        privateKey,
        refreshTokensUsed: [],
        refreshToken,
      };
      const options = { upsert: true, new: true };

      const tokens = await keytokenModel.findOneAndUpdate(
        filters,
        update,
        options
      );
      return tokens ? tokens.publicKey : null;
    } catch (error) {
        console.log(error);
      return error;
    }
  };
}

module.exports = KeyTokenService;
