const express = require('express')
const registerModel = require('../models/registerModel');
const loginModel = require('../models/loginModel');
const driverModel = require('../models/driverModel');
const bcrypt =require('bcryptjs')


const registerRouter = express.Router()



registerRouter.post('/registeruser', async function(req, res){
    try{

        console.log("query====>",req.query);
        const oldUser = await loginModel.findOne({username:req.body.username})
        console.log("sjdhiuygh===>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error:true,
                message:"user already exist",
            })

        }

        const oldEmail = await registerModel.findOne({email:req.body.email})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error:true,
                message:"email already exist",
            })
        }
        const hashed = await bcrypt.hash(req.body.password,12)
        const login={
            password:hashed,
            username:req.body.username,
            role:1,
            status:0
        }
        const login_data =await loginModel(login).save()
     
        const register = {
           login_id:login_data._id,
           name: req.body.name,
           address:req.body.address,
           email:req.body.email,
           phone:req.body.phone,
           password:req.body.password,
           username:req.body.username,


     }
        const datas = await registerModel(register).save()
        if(datas){
            return res.status(200).json({
                success:true,
                error:false,
                message:"registration completed",
                data:datas
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

registerRouter.post('/registerdriver', async function(req, res){
    try{

        console.log("query====>",req.query);
        const oldUser = await loginModel.findOne({username:req.body.username})
        console.log("sjdhiuygh===>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error:true,
                message:"user already exist",
            })

        }

        const oldEmail = await driverModel.findOne({email:req.body.email})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error:true,
                message:"email already exist",
            })
        }
        
        const hashed = await bcrypt.hash(req.body.password,12)
        const login={
            password:hashed,
            username:req.body.username,
            role:2,
            status:0
        }
        const login_data =await loginModel(login).save()
     
        const register = {
           login_id:login_data._id,
           name: req.body.name,
           address:req.body.address,
           phone:req.body.phone,
           email:req.body.email,
           experience:req.body.experience,
           licenceno:req.body.licenceno,
           password:req.body.password,
           username:req.body.username,


     }
        const datas = await driverModel(register).save()
        if(datas){
            return res.status(200).json({
                success:true,
                error:false,
                message:"registration completed",
                data:datas
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

registerRouter.get('/view-user', async function(req, res){
    try{

      
        const user = await loginModel.find()
         
        if(user){
            return res.status(200).json({
                success: false,
                error:true,
                details:user,
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

registerRouter.get('/view-driver', async function(req, res){
    try{

      
        const driver = await driverModel.find()
         
        if(driver){
            return res.status(200).json({
                success: false,
                error:true,
                details:driver,
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

registerRouter.post('/registeruser', async function(req, res){
    try{

        console.log("query====>",req.query);
        const oldUser = await loginModel.findOne({username:req.body.username})
        console.log("sjdhiuygh===>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error:true,
                message:"user already exist",
            })

        }

        const oldEmail = await registerModel.findOne({email:req.body.email})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error:true,
                message:"email already exist",
            })
        }
        const login={
            password:req.body.password,
            username:req.body.username,
            role:1,
            status:0
        }
        const login_data =await loginModel(login).save()
     
        const register = {
           login_id:login_data._id,
           name: req.body.name,
           address:req.body.address,
           email:req.body.email,
           phone:req.body.phone,
           password:req.body.password,
           username:req.body.username,


     }
        const datas = await registerModel(register).save()
        if(datas){
            return res.status(200).json({
                success:true,
                error:false,
                message:"registration completed",
                data:datas
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










module.exports= registerRouter