const mongoose = require('mongoose')

const schema = mongoose.Schema


const statusSchema = new schema({
   
    stime:{type:String},
    uatime:{type:String},
    datime:{type:String}
     



})
const statusModel = mongoose.model('status_tb',statusSchema)

module.exports = statusModel 