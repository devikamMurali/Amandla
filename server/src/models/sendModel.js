const mongoose = require('mongoose')

const schema = mongoose.Schema


const sendSchema = new schema({
   
    requestforcontact:{type:String},
    status:{type:String}
     



})
const sendModel = mongoose.model('send_tb',sendSchema)

module.exports = sendModel 