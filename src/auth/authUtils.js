"use strict"
const JWT = require('jsonwebtoken');
const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = await JWT.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn:  '2 days'
        });
        const refreshToken = await JWT.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn:'7 days'
        })

        JWT.verify(accessToken, publicKey, (err, decode) => {
            if(err) {
                console.error(`error: ` + err);
            }
            else {
                console.log(decode);
            }
        })
    } catch (error) {
        
    }
} 

module.exports ={createTokenPair}