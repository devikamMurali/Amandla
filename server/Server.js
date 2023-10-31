const express = require('express')
const mongoose = require('mongoose')
const registerModel = require('./src/models/registerModel');
const loginModel = require('./src/models/loginModel');

const registerRouter = require('./src/routes/registerRouter');
const driverModel = require('./src/models/driverModel');
const loadModel = require('./src/models/loadModel');
const loadRouter = require('./src/routes/loadRouter');
const bodyparser = require('body-parser');
const loginRouter = require('./src/routes/loginRouter');
const feedbackModel = require('./src/models/feedbackModel');
const feedbackRouter = require('./src/routes/feedbackRouter');
const truckRouter = require('./src/routes/truckRouter');
const truckModel = require('./src/models/truckModel');
const contactRouter = require('./src/routes/contactRouter');
const contactModel = require('./src/models/contactModel');
const AdminRouter = require('./src/routes/AdminRouter');
const statusRouter = require('./src/routes/statusRouter');
const statusModel = require('./src/models/statusModel');
const AcceptRouter = require('./src/routes/AcceptRouter');
const sendRouter = require('./src/routes/sendRouter');
const sendModel = require('./src/models/sendModel');

const profileRouter = require('./src/routes/profileRouter');








 
 

 
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(bodyparser())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });


// app.post('/',function(req,res){
//     console.log(req);
//     res.send("hi")
// })

// app.post('/login', function(req,res){
//     console.log(req);
//     res.send("login page")
// })
// app.use('/register',async function (req,res){

    // try{
    //     const data = { 
    //         name: req.body.name,
    //         address: req.body.address,
    //         email: req.body.email,
    //         phone: req.body.phone,
            
    // }
    //     console.log("data=======>",data);

    //     res.status(200).json({data})

    // } 
    // catch(error){

    // }
// } )

 app.use('/register',registerRouter)
 app.use('/load',loadRouter)
 app.use('/login',loginRouter)
 app.use('/feedback',feedbackRouter)
 app.use('/truck',truckRouter)
 app.use('/contact',contactRouter)
 app.use('/admin',AdminRouter)
 app.use('/status',statusRouter)
 app.use('/accept',AcceptRouter)
 app.use('/send',sendRouter)
 
 app.use('/profile',profileRouter)
 
 




        const MongoDBurl="mongodb+srv://mdparayil1214:mdparayil1214@cluster0.09dhtzo.mongodb.net/?retryWrites=true&w=majority"  
 

    
        mongoose.connect(MongoDBurl).then(()=>{
            app.listen(1000,()=>{ console.log("Server started at http://localhost:1000");})

}).catch((error) => {
    console.log(error);
})
  