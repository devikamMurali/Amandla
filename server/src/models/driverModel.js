const mongoose = require('mongoose')

const schema = mongoose.Schema

const driverregisterSchema = new schema({

           login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
           name:{type:String}, 
           address:{type:String}, 
           email:{type:String},  
           phone:{type:String},
           experience:{type:String},
           licenceno:{type:String},
           username:{type:String},
           password:{type:String},

})
const driverModel = mongoose.model('driver_registration_tb',driverregisterSchema)

module.exports = driverModel