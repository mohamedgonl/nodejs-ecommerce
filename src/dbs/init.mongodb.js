'use strict'

const mongoose = require('mongoose')
const MONGO_URL = `mongodb://localhost:27017/shopDEV`
const {countConnect} = require('../helpers/check.conenct')


class Database {
    constructor(){
        this.connect()
    }
    
    // connect 
    connect(type = 'mongodb'){
        if(1===1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
        mongoose.connect(MONGO_URL).then( _ => console.log(`Connected Mongodb Success PRO`))
        .then(__ => countConnect())
        .catch(err => console.log(`Error Connect`))

    }

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }

    
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb