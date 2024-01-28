"use strict"

class AccessController {
    signUp =  async(req,res,next) => {
        try {
            console.log(`[params]:::signUp:::`, req.body);
            return res.status(200).json({
                code : 111
            })
        } catch (error) {
            
        }
    }
}

module.exports= new AccessController()