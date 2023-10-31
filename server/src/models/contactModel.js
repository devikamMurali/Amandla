const mongoose = require('mongoose')

const schema = mongoose.Schema


const contactSchema = new schema({
   
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    message:{type:String},



})
const contactModel = mongoose.model('contact_tb',contactSchema)

module.exports = contactModel