"use strict"

const { default: mongoose } = require("mongoose")
const os = require('os');
const process = require('process');

const CHECK_OVERLOAD_INTERVAL_TIME  = 5000;


const countConnect = () => {
    const numConnections =mongoose.connections.length;
    console.log(`Number of connections ::: ${numConnections}`);
}

const checkOverload =  ()  => {
    setInterval(()=>{
        const numConnections =mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnection = numCores *  5;

        console.log(`Active connection :: ${numConnections}`);
        console.log(`Memory usage :: ${memoryUsage/1024/1024} MB`);
        if(numConnections > maxConnection) {
            console.log(`Connection  overload detected`);
        }

    }, CHECK_OVERLOAD_INTERVAL_TIME)
}

module.exports = {countConnect,checkOverload}