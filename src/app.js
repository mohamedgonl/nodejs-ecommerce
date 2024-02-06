require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')

const app = express()

// init middleware
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// init db
require('./dbs/init.mongodb')

// init  routes
app.use('', require('./routes/index'))

// handle error

module.exports = app