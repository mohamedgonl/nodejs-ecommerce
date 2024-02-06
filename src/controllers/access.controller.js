"use strict"

const AccessService = require("../services/access.service");

class AccessController {
    signUp =  async(req,res,next) => {
        try {
            console.log(`[params]:::signUp:::`, req.body);
            return AccessService.signUp(req.body)
        } catch (error) {
            
        }
    }
}

module.exports= new AccessController()