"use strict"

const express = require('express')
const accessController = require('../../controllers/access.controller')
const { asyncHandler } = require('../../auth/checkAuth')
const route = express.Router()

route.post('/shop/signup',asyncHandler(accessController.signUp))

module.exports= route