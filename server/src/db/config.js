
const mongoose = require('mongoose')

require('dotenv').config()

// console.log(process.env)
const url =  process.env.MONGO_URL
// console.log({url})
module.exports = () => {
    return mongoose.connect(url,{})
}