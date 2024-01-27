const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')

const app = express()

// init middleware
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())
// init db
require('./dbs/init.mongodb')

// init  routes
app.use('/', (req,res,next) => {
    const strCompress = "hello world"
    return res.status(500).json({
        message:'Welcome',
        data: strCompress.repeat(10000)
    })
})

// handle error

module.exports = app