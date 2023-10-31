const express = require('express')


const bcrypt =require('bcryptjs')
const loginModel = require('../models/loginModel')
const driverModel = require('../models/driverModel')
const loadModel = require('../models/loadModel')
const truckModel = require('../models/truckModel')
const registerModel = require('../models/registerModel')
const contactModel = require('../models/contactModel')


const AdminRouter = express.Router()

AdminRouter.get('/view-user', async function(req, res){
    try{

      
        const user = await loginModel.aggregate([
{
       '$lookup': {
        'from':'registration_tbs',
        'localField':'_id',
        'foreignField':'login_id',
        'as':'user',
       }
    },
    {
        "$unwind":'$user'

    },
    {
        "$group":{
            '_id':'$_id',
            'login_id':{'$first':'$user.login_id'},
            'name':{'$first':'$user.name'},
            'address':{'$first':'$user.address'},
            'email':{'$first':'$user.email'},
            'phone':{'$first':'$user.phone'},
            'status':{'$first':'$status'},
            

        }
    }
])












         
        if(user){
            return res.status(200).json({
                success: true,
                error:false,
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

AdminRouter.get('/view-driver', async function(req, res){
    try{

      
        const driver = await loginModel.aggregate([

    
            {
                   '$lookup': {
                    'from':'driver_registration_tbs',
                    'localField':'_id',
                    'foreignField':'login_id',
                    'as':'driver',
                   }
                },
                {
                    "$unwind":'$driver'
            
                },
                {
                    "$group":{
                        '_id':'$_id',
                        'login_id':{'$first':'$driver.login_id'},
                        'name':{'$first':'$driver.name'},
                        'address':{'$first':'$driver.address'},
                        'email':{'$first':'$driver.email'},
                        'phone':{'$first':'$driver.phone'},
                        'experience':{'$first':'$driver.experience'},
                        'licenceno':{'$first':'$driver.licenceno'},
                        'status':{'$first':'$status'},
                        
            
                    }
                }
            ])
            
            
         
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

AdminRouter.get('/view-load', async function(req, res){
    try{

      
        const load = await loadModel.find()
         
        if(load){
            return res.status(200).json({
                success: false,
                error:true,
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

AdminRouter.get('/view-truck', async function(req, res){
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
AdminRouter.get('/approve-driver/:login_id', async function(req, res){
    try{
          const login_id = req.params.login_id
          console.log(login_id);
      
        const driver = await loginModel.updateOne({_id:login_id},{$set:{status:1}})
         console.log(driver);
        if(driver.modifiedCount==1){
            return res.status(200).json({
                success: true,
                error:false,
                message:'driver approved',
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



AdminRouter.get('/approve-user/:sree', async function(req, res){
    try{
          const login_id = req.params.sree
          console.log(login_id);
      
        const user = await loginModel.updateOne({_id:login_id},{$set:{status:1}})
         console.log(user);
        if(user.modifiedCount==1){
            return res.status(200).json({
                success: true,
                error:false,
                message:'user approved',
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


AdminRouter.get('/reject-driver/:login_id', async function(req, res){
    try{
          const login_id = req.params.login_id
          console.log(login_id);
      
        const driver = await loginModel.deleteOne({_id:login_id})
         console.log(driver);
        if(driver.deletedCount==1){
            const drivers = await registerModel.deleteOne({__id:login_id})
            if(driver.deletedCount==1){ 
            return res.status(200).json({
                success: true,
                error:false,
                message:'driver rejected',
            })

        }
        else{

            return res.status(400).json({
                success: false,
                error:true,
                message:"No data found",
        })

         
           
    }
}
}catch{
        return res.status(400).json({
            success:false,
            error:true,
            message:"something went wrong",
        })
    }
})


AdminRouter.get('/reject-user/:login_id', async function(req, res){
    try{
          const login_id = req.params.login_id
          console.log(login_id);
      
        const user = await loginModel.deleteOne({_id:login_id})
         console.log(user);
        if(user.deletedCount==1){
            const users = await registerModel.deleteOne({__id:login_id})
            if(user.deletedCount==1){
            return res.status(200).json({
                success: true,
                error:false,
                message:'user rejected',
            })
        }

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
 
AdminRouter.get('/view-contct', async function(req, res){
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

 
 
module.exports= AdminRouter
