const express=require('express');
const routes=express();
const port=3001;

routes.get('/',(req,res)=>{
    res.status(200).json({message:"get all published by user"});
});


routes.post('/',(req,res)=>{
    res.status(200).json({message:"create post"});
});
routes.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});
