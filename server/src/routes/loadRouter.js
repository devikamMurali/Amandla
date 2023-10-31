const express = require('express')
const loadModel = require('../models/loadModel')
const loginModel = require('../models/loginModel')


const loadRouter = express.Router()
loadRouter.post('/', async function(req, res){
    try{

 
        const load= {
           user_id:req.body.user_id,
           truck_id:req.body.truck_id,
           driver_id:req.body.driver_id, 
           loadtype: req.body.loadtype,
           loadweight: req.body.loadweight,
           load_from: req.body.load_from,
           load_to:req.body.load_to,
           Date:req.body.Date,
           Time:req.body.Time,
           status:0

            
     }
        const load_data = await loadModel(load).save()
        if(load){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:"data added",
                data:load
            })
        }
    } 
    catch (error){
         
    }
})






loadRouter.get('/view-load/:driver_id', async function(req, res){
    try{

        const driver_id =req.params.driver_id
        const load = await loadModel.find({driver_id:driver_id},{status:0})
         
        if(load){
            return res.status(200).json({
                success: true,
                error:false,
                details:load,
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
loadRouter.get('/approve-user/:sree', async function(req, res){
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
loadRouter.get('/reject-user/:login_id', async function(req, res){
    try{
          const login_id = req.params.login_id
          console.log(login_id);
      
        const user = await loadModel.deleteOne({_id:login_id})
         console.log(user);
        if(user.deletedCount==1){
             
            return res.status(200).json({
                success: true,
                error:false,
                message:'rejected',
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


module.exports= loadRouter