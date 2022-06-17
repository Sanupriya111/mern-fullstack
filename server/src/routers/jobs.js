// var express = require('express')
// const jobsRouter = express.Router();
// const jobdata = require("../models/jobs");
// jobsRouter.post('/postjob', (req, res) => {
//     const jobsdetails = {
//         Company:req.body.Company,
//         Location:req.body.Location,
//         Discription:req.body.Discription,
//         Employ:req.body.Employ,
//         Found:req.body.Found,
//         Logo:req.body.Logo
       
//     }
//     console.log(req.body)
//     var jobdatas=jobdata(jobsdetails)
//     jobdatas.save().then((response)=>{
//         console.log("successfully added" +response)
//           })
//           res.redirect("/home")
        
// })
// module.exports=jobsRouter;