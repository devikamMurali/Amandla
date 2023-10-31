const express = require('express')
const feedbackModel = require('../models/feedbackModel')




const feedbackRouter = express.Router()
feedbackRouter.post('/', async function(req, res){
    try{

 
        const feedback= {
           date: req.body.date,
           time: req.body. time,
           content:req.body. content,
            
     }
        const feed_data = await feedbackModel(feedback).save()
        if(feedback){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:"feedback posted",
                data:feedback
            })
        }
    } 
    catch (error){
         
    }
})

feedbackRouter.get('/view-feedback', async function(req, res){
    try{

      
        const feedback = await feedbackModel.find()
         
        if(feedback){
            return res.status(200).json({
                success: false,
                error:true,
                details:feedback,
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





module.exports= feedbackRouter