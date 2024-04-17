const mongoose = require('mongoose')



const chatSchmea = new mongoose.Schema({
    username : {type : String, required : true},
    room : {type : String, required : true},
    message : {type : String,required : true},
    created_date : {type : Date, required: true}
},{
    versionKey : false
})



module.exports = mongoose.model('chat',chatSchmea)