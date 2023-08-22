const express = require('express')
const morgan = require('morgan')
const {default : helmet} = require('helmet')
const compression = require('compression')
const app = express()



// init middlewares
app.use(morgan('dev')); // log ra request đến 
app.use(helmet()); // che giấu các thông tin liên quan đến sever
app.use(compression());

// init db

require('./dbs/init.mongodb')
const {checkOverload} = require('./helpers/check.conenct')
checkOverload()
// init routes
app.get('/', (req,res,next) => {
    const compresStr = " Hello fodfd bà con"
    res.status(200).send(compresStr.repeat(10000))
})

// error handles

module.exports = app