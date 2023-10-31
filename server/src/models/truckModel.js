const mongoose = require('mongoose')

const schema = mongoose.Schema


const truckSchema = new schema({
    driver_id:{type:mongoose.Types.ObjectId,ref:"driver_registration_tb"},
    trucktype:{type:String},
    capacity:{type:String},
    truckno:{type:String},
    From:{type:String},
    To:{type:String},
    photo:{type:String},
    status:{type:String}



})
const truckModel = mongoose.model('truck_tb',truckSchema)

module.exports = truckModel 