const mongoose = require('mongoose')

const schema = mongoose.Schema


const loadSchema = new schema({
    user_id:{type:mongoose.Types.ObjectId,ref:"registration_tb"},
    truck_id:{type:mongoose.Types.ObjectId,ref:"truck_tb"},
    driver_id:{type:mongoose.Types.ObjectId,ref:"driver_registration_tb"},
    loadtype:{type:String},
    loadweight:{type:String},
    load_from:{type:String},
    load_to:{type:String},
    Date:{type:String},
    Time:{type:String},
    status:{type:String}




})
const loadModel = mongoose.model('load_tb',loadSchema)

module.exports = loadModel