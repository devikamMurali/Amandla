const mongoose = require('mongoose')

const schema = mongoose.Schema


const feedbackSchema = new schema({
   
    date:{type:String},
    time:{type:String},
    content:{type:String},



})
const feedbackModel = mongoose.model('feedback_tb',feedbackSchema)

module.exports = feedbackModel