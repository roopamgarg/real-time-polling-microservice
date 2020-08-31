const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollsSchema = new Schema({
    title:{type:String,required:[true,'Title is required']},
    question:{type:String,required:[true,'Title is required']},
    isMultiAnswersAllowed:{type:Boolean,default:false,required:true},
    answers:[{
        text:{type:String,required:true},
        votes:{type:Number,default: 0,required:true}
    }],
    createdAt:{type:Date,required:true,default: new Date()}
});


module.exports = mongoose.model("polls", pollsSchema);
