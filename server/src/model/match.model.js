const mongoose= require('mongoose')



const matchSchmea =  new mongoose.Schema({
    mid : {type : String ,required:true},
    current_chance : {type : String, enum : "WHITE" | "BLACK", required : true},
    is_king_user_attack : {type : Boolean, required : false},
    cuid : {type : String,required : true},
    chess_orit : {type : Object , required : true},
    
})









