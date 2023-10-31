const express = require('express')
const loginModel = require('../models/loginModel');
const loginRouter = express.Router()
const bcrypt = require('bcryptjs');
const registerModel = require('../models/registerModel');
const driverModel = require('../models/driverModel');



loginRouter.post('/', async function(req, res){
    try{

        console.log(req.body);
        const userlog = await loginModel.findOne({username:req.body.username})
         if(!userlog){
            return res.status(400).json({
                success: false,
                error:true,
                message:"username not exist"
            })

        }
    
        const passwordCheck = await bcrypt.compare(req.body.password,userlog.password)
        console.log(passwordCheck);
        if(passwordCheck){
            console.log('role',userlog.role);
            if(userlog.role==0){
            return res.status(200).json({
                success: true,
                error:false,
                login_id:userlog._id,
                role:userlog.role,
                status:userlog.status,
                message:"login successfully"
            })
        }
         if(userlog.role==1){
        console.log("jjjjjjjjjj");
        const userData = await registerModel.findOne({login_id:userlog._id})

            return res.status(200).json({
                success:true,
                error:false,
                login_id:userlog._id,
                user_id:userData._id,
                role:userlog.role,
                status:userlog.status,
                message:"login successfully",
                
            })
         }
        if(userlog.role==2){
        
        console.log("hi");
        const driverData = await driverModel.findOne({login_id:userlog._id})
        
            return res.status(200).json({
                success:true,
                error:false,
                login_id:userlog._id,
                driver_id:driverData._id,
                role:userlog.role,
                status:userlog.status,
                message:"login successfully",
                  
            })
        }
    }
    
    else{
        return res.status(400).json({
            success:false,
            error:true, 
            message:"password not match",  
        })
    }    


}catch{

}
         
})
module.exports = loginRouter