const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    username:{
        type:String, required:true, min:3, max:15, unique:true
    },
    password:{
        type:String, required:true, min:6
    },
    email:{
        type:String, required:true, unique:true
    },
    profilePic:{
        type:String,default:""
    },
    coverPic:{
        type:String,default:""
    },
    followers:{
        type:[String], default:[]
    },
    followins:{
        type:[String],default:[]
    },
    isAdmin:{
        type:Boolean,default:false
    }
    }, {timestamps: true}
)
module.exports = mongoose.model('User',UserSchema)