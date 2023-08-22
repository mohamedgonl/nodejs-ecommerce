
const mongoose = require('mongoose');
const os =require('os');
const process = require('process');

const _SECOND = 5000


const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`Number of connections:${numConnect}`);
}

const checkOverload = () =>{
    setInterval(() => {
        const numConnect = mongoose.connections.length
        const numCore = os.cpus().length
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCore * 5

        console.log(`Active connection:: ${numConnect}`);
        console.log(`Memory usage:: ${memoryUsage/1024/1024} MB`);

        if(numConnect > maxConnections) {
            console.log(`Connection overload detected!`);
        }
    }, _SECOND); // monitor every 5s
}
module.exports= {
    countConnect, checkOverload
}