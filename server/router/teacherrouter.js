const express= require('express')
const model= require("../model/teachermodel")
const router=express.Router();


router.post('/register', async (req,res)=>{
    console.log("teacher req.body",req.body);
    console.log("req.body");
    const  email  = req.body.email;

    // Check if the email already exists in the database
    const existingUser = await model.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }
    new model(req.body).save()
    .then((result)=>{
        console.log("teacher register data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


router.post('/login',(req,res)=>{
    console.log(req.body);
    const loginData= req.body;
    model.findOne({email:loginData.email,password:loginData.password})
    .then((result)=> {
        if(result){
            res.status(200).json(result);
            console.log(" teacher login data match");
        }
        else {
            res.status(401).json({status:"login faled"})
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


router.get('/getallTeacher',(req,res)=>{
    console.log(req.body);
    model.find()
    .then((result)=>{
        console.log("teacherdata get");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})

router.get('/getrelatedTeacherDetail/:teacher_id',(req,res)=>{
    // console.log(req.body);
    console.log(req.params.teacher_id);
    model.findById(req.params.teacher_id).populate('email')
    .then((result)=>{
        console.log("res",result);
        console.log("relTEDteacherdata fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("data fetching  fail hogya");
        res.json(err)
    });
})
 
router.post('/edit',(req,res)=>{
    console.log(req.body.id);
    model.findOneAndUpdate({_id: req.body.id}, {password:req.body.password})
    .then((result) => {
        res.json(result)
        console.log("pass update");
    }).catch((err) => {
        res.json(err)
    });
    
})

//
router.post('/editprofile',(req,res)=>{
    console.log(req.body.id);
    console.log(req.body);
    model.findOneAndUpdate({_id: req.body.id}, {password:req.body.password,name:req.body.name,email:req.body.email,qualification:req.body.qualification,phone:req.body.phone, address: req.body.address,thumbnail:req.body.thumbnail})
    .then((result) => {
        res.json(result)
        console.log("pass update");
    }).catch((err) => {
        res.json(err)
    });
    
})


//reset password
router.post('/reset',(req,res)=>{
    console.log(req.body.id);
    model.findOneAndUpdate({_id: req.body.id}, {password:req.body.password})
    .then((result) => {
        res.json(result)
        console.log("pass update");
    }).catch((err) => {
        res.json(err)
    });
    
})
module.exports=router