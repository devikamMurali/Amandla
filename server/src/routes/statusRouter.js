const express = require('express');



const statusRouter = express.Router()
const statusModel = require('../models/statusModel');


statusRouter.post('/', async function(req, res){
    try{   
         
        const status= {
           stime:req.body.stime,
           uatime:req.body.uatime,
           datime:req.body.datime,
            
            
     }
     console.log(status);
    
        const status_data = await statusModel(status).save()
        if(status_data){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:" submited successfully",
                data:status_data
            })
        }
    }
    catch (error){
         
    }
})

 statusRouter.get('/view-status', async function(req, res){
        try{
             
          
            const status = await statusModel.find()
             
            if(status){
                return res.status(200).json({
                    success: true,
                    error:false,
                    details:status,
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

         
    










module.exports= statusRouter