"use strict"

const { default: mongoose } = require("mongoose")
const { countConnect, checkOverload } = require("../helpers/checkConnect")

const connectString  = `mongodb://localhost:27017/nodejs-ecomerce`




class Database {
    constructor(){
        this.connect()
    }

    connect(type = 'mongodb') {
        if(type === 'mongodb') {
            if(1===1) {
                mongoose.set('debug', true)
                mongoose.set('debug', {color: true})
            }

            mongoose.connect(connectString, {
                maxPoolSize: 50
            }).then(()=> {
                console.log(`Connect Mongodb Success`);
                countConnect()
                checkOverload()
            }).catch( err => console.log(`Error Connect!`))

        }
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance
    }
}

const instanceDB = Database.getInstance()
module.exports  = instanceDB