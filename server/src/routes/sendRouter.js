const express = require('express');
const sendModel = require('../models/sendModel')


const sendRouter = express.Router()
sendRouter.post('/', async function(req, res){
    try{   
         
        const send= {
           requestforcontact:req.body.requestforcontact,
           
            
            
     }
    
        const send_data = await sendModel(send).save()
        if(send){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:" submited successfully",
                data:send
            })
        }
    }
    catch (error){
         
    }
})
sendRouter.get('/view-send', async function(req, res){
    try{
          
      
        const send = await sendModel.find(
        
            
          )
         
        if(send){
            return res.status(200).json({
                success: false,
                error:true,
                details:send,
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
module.exports= sendRouter