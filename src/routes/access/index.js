'use strict'

const express = require('express')
const route = express.Router()
const AccessController = require('../../controllers/access.controller')
// sign up
route.post("/shop/signup",AccessController.signUp)

// sign in

module.exports =  route