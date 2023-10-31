const express = require('express');

const AcceptRouter = express.Router()

const loadModel = require('../models/loadModel');

AcceptRouter.get('/approve-user/:sree', async function(req, res){
    try{
          const truck_id = req.params.sree
          console.log(truck_id);
      
        const user = await loadModel.updateOne({_id:truck_id},{$set:{status:1}})
         console.log(user);
        if(user.modifiedCount==1){
            return res.status(200).json({
                success: true,
                error:false,
                message:'accepted',
            })

        }else{

            return res.status(400).json({
                success: false,
                error:true,
                message:"No data found",
        })

         
           
    }
}
    catch{
        return res.status(400).json({
            success:false,
            error:true,
            message:"something went wrong",
        })
    }
})

AcceptRouter.get('/view-approve-user/:id', async function(req, res){
    try{
        const _id = (req.params.id)
           
        const user = await loadModel.aggregate([
            
                 {
                    '$lookup': {
                        'from': 'truck_tbs', 
                        'localField': 'truck_id', 
                        'foreignField': '_id', 
                        'as': 'truck'
                    }

                },
                {
                    '$lookup': {
                        'from': 'driver_registration_tbs', 
                        'localField': 'truck.driver_id', 
                        'foreignField': '_id', 
                        'as': 'driver'
                }
            },
                {
                    "$unwind":'$truck'
                },
                {
                    "$unwind":'$driver'
                },
                 {
                     '$match':{
                        "status":'1'
                    }

                 },
                {
                 "$group":{
                    '_id':"$_id",
                    'truck_id':{'$first':'$truck._id'},
                    'trucktype':{'$first':'$truck.trucktype'},
                    'capacity':{'$first':'$truck.capacity'},
                    'truckno':{'$first':'$truck.truckno'},
                    'loadtype':{'$first':'$loadtype'},
                    'date':{'$first':'$Date'},
                    'time':{'$first':'$Time'},
                    'phone':{'$first':'$driver.phone'},
                    'status':{'$first':'$status'},
        



                 }
                }

            
        ])
          
        if(user){
            return res.status(200).json({
                success: true,
                error:false,
                data:user,
                message:'accepted',
            })

        }else{

            return res.status(400).json({
                success: false,
                error:true,
                message:"No data found",
        })

         
           
    }
}
    catch{
        return res.status(400).json({
            success:false,
            error:true,
            message:"something went wrong",
        })
    }
}) 
 
module.exports= AcceptRouter