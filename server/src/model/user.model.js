const mongoose= require('mongoose')



const userSchmea = new mongoose.Schema({
    uid : {type : String,  required : true},
    total_win : {type : Number, required: false, default :0},
    total_lose : {type : Number,required : false, default : 0}
}, {
    timestamps : true 
})



// const userModel = mongoose.model(userSchmea,'user');
