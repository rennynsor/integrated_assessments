const express= require('express');
const router=express();
const sequelize=require('../integrated_assessment');
router.get('/api',(req,res)=>{
    res.status(200).json({
success:1,
message:"get all contact created"
    })
});
module.exports=router;