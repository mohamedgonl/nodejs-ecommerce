"use strict";

const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require('crypto')
const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: "EDITOR",
    ADMIN: "ADMIN"
}

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      const shop = await shopModel.findOne({ email }).lean();
      if (shop) {
        return {
          code: "xxxx",
          message: "Shop already existed",
        };
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: hashPassword,
        roles: [RoleShop.SHOP],
      });

      if(newShop) {
        const {} = crypto.generateKeyPairSync('rsa',{
            modulusLength: 4096
        })
      }

    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
