const mongoose = require('mongoose');
const {Schema} = mongoose;
const PostSchema = new Schema({
    userId:{
        type:String, required:true
    },
    desc:{
        type:String, max:200
    },
    img:{
        type:String
    },
    like:{
        type:[String], default:[]
    }
    }, {timestamps: true}
)
module.exports = mongoose.model('Post',PostSchema)