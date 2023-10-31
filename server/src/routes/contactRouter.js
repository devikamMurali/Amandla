const express = require('express')
const contactModel = require('../models/contactModel')





const contactRouter = express.Router()
contactRouter.post('/', async function(req, res){
    try{

 
        const contact= {
           name: req.body.name,
           email: req.body.email,
           phone:req.body.phone,
           message:req.body.message,
            
     }
        const contact_data = await contactModel(contact).save()
        if(contact){ 
            return res.status(200).json({
                success:true,
                error:false,
                message:"success",
                data:contact
            })
        }
    } 
    catch (error){
         
    }
})
contactRouter.get('/view-contct', async function(req, res){
    try{

      
        const contact = await contactModel.find()
         
        if(contact){
            return res.status(200).json({
                success: false,
                error:true,
                details:contact,
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





module.exports= contactRouter