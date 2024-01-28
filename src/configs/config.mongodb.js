"use strict"

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3000
    },
    db: {
        host: process.env.DEV_APP_HOST || 'localhost',
        port:  process.env.DEV_APP_PORT ||  27017,
        name : process.env.DEV_APP_NAME || 'nodejs-ecomerce-dev'
    }
}

const prod = {
    app: {
        port: process.env.PROD_APP_PORT
    },
    db: {
        host: process.env.PROD_APP_HOST,
        port:  process.env.PROD_APP_PORT,
        name : process.env.PROD_APP_NAME
    }
}

const configs = {dev, prod}
const env =process.env.NODE_ENV || 'dev'
console.log("Configs :::",configs[env]);
module.exports = configs[env]
