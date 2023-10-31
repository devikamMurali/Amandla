const express = require('express');
const registerModel = require('../models/registerModel');

const profileRouter = express.Router()


// edit Profile
profileRouter.get('/profile/:id',async function(req,res){
    
    try{
        
        const id=req.params.id
        console.log(id);
            const datas = await registerModel.findOne({_id:id})
            console.log("data",datas);
                if(datas){
                    return res.status(200).json({
                        success:true,
                        error:false,
                        details:datas,
                    })
                   }else{
                    return res.status(200).json({
                        success:true,
                        error:false,
                        message:"No data Found",
                    })
                   }
                }  catch{
                    return res.status(400).json({
                        success:false,
                        error:true,
                        message:"something went wrong"
                    })
                   }
                
                 })
                 //viewprofile
profileRouter.get('/view-profile/:id',async function(req,res){
    
    try{
        
        const id=req.params.id
        console.log(id);
            const datas = await registerModel.findOne({_id:id})
            console.log("dataf",datas);
                if(datas){
                    return res.status(200).json({
                        success:true,
                        error:false,
                        details:datas,
                    })
                   }else{
                    return res.status(200).json({
                        success:true,
                        error:false,
                        message:"No data Found",
                    })
                   }
                }  catch{
                    return res.status(400).json({
                        success:false,
                        error:true,
                        message:"something went wrong"
                    })
                   }
                
                 })  
                 // update profile
profileRouter.get('/updateprofile/:id',async function(req,res){
    
    try{
        const name=req.params.id
        const data={
            email:req.params.email,
            number:req.params.number,
            name:req.body.name,
        }
        
            const datas = await registerModel.updateOne({_id:name},{$set:data})
            console.log("dataf",datas);
                if(datas){
                    return res.status(200).json({
                        success:true,
                        error:false,
                        details:datas,
                    })
                   }else{
                    return res.status(200).json({
                        success:true,
                        error:false,
                        message:"No data Found",
                    })
                   }
                }  catch{
                    return res.status(400).json({
                        success:false,
                        error:true,
                        message:"something went wrong"
                    })
                   }
                
                 })
                 module.exports = profileRouter