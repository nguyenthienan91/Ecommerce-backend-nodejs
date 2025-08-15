'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000

//count connect
const countConnect = () => {
    const numConnection = mongoose.connect.length
    console.log(`Number of connection ${numConnection}`)
}
//check over load
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        //ví dụ max numver của kết nối dựa trên core
        const maxConnections = numCores * 5
        console.log(`Active connection: ${numConnection}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)
        if(numConnection > maxConnections){
            console.log(`Connection overload detected!`)
        }

    },_SECONDS)     //theo dõi mỗi 5s
}

module.exports = {
    countConnect,
    checkOverLoad
}
