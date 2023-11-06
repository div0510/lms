const router= require("express").Router();
const Chaptermodel=require('../model/chaptermodel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Chaptermodel(req.body).save()
    .then((result)=>{
        console.log("chapter data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


router.get('/getall',(req,res)=>{
    console.log(req.body);
    Chaptermodel.find().populate("createdBy")
    .then((result)=>{
        console.log(result);
        console.log("chapter data fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log(" chapter data fetching  fail hogya");
        res.json(err)
    });
})

router.post('/delete',(req,res)=>{
    model.findByIdAndDelete({_id: req.body._id})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.json(err);
    });
})


module.exports=router