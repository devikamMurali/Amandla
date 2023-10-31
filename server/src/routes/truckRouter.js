const express = require('express');
const truckModel = require('../models/truckModel');
const loadModel = require('../models/loadModel');
const  mongoose  = require('mongoose');
const object_id = mongoose.Types.ObjectId
const multer = require('multer')




const truckRouter = express.Router()
const storage = multer.diskStorage({
    destination: function (req ,file, cb) {
        cb(null, '../client/public/truck')
    },
    filename:function(req, file, cb) {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage})
truckRouter.post('/upload-image',upload.single('file'),(req,res)=>{
    res.status(200).json({
        message:"image added"
    })
})

truckRouter.post('/', async function(req, res){
    try{   
         
        const truck= {
           driver_id:req.body.driver_id,  
           trucktype:req.body.trucktype,
           capacity:req.body.capacity,
           photo:req.body.photo,
           truckno:req.body.truckno,
           From:req.body.From,
           To:req.body.To,
           status:0
           
            
     }
        const truck_data = await truckModel(truck).save()
        if(truck){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:"details added successfully",
                data:truck
            })
        }
    } 
    catch (error){
         
    }
})

truckRouter.get('/view-truck-booking/:id', async function(req, res){
    try{
         const driver_id =(req.params.id)
      
        const truck = await loadModel.aggregate([
            {
              '$lookup': {
                'from': 'truck_tbs', 
                'localField': 'truck_id', 
                'foreignField': '_id', 
                'as': 'truck'
              }
            },
            {
                '$unwind':'$truck'
            },
            {
                '$match':{
                    'truck.driver_id':new object_id(driver_id)
                }
            },
            
          ])
         
        if(truck){
            return res.status(200).json({
                success: false,
                error:true,
                details:truck,
            })

        }else{

            return res.status(200).json({
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
truckRouter.get('/view-truck', async function(req, res){
    try{

      
        const truck = await truckModel.find()
         
        if(truck){
            return res.status(200).json({
                success: false,
                error:true,
                details:truck,
            })

        }else{

            return res.status(200).json({
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
truckRouter.get('/view-truck', async function(req, res){
    try{

      
        const truck = await truckModel.find()
         
        if(truck){
            return res.status(200).json({
                success: false,
                error:true,
                details:truck,
            })

        }else{

            return res.status(200).json({
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






module.exports= truckRouter