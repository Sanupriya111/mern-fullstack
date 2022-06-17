var express = require('express')
const mernrouter = express.Router();
const logindata = require("../models/login");
const registerdata = require("../models/register");
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const jobdata = require("../models/jobs");
const multer=require("multer")

mernrouter.post('/register', (req, res) => {
    const logindetails = {
        Username: req.body.Username,
        Password: req.body.Password,
        Roll:req.body.Roll

    }
    var logindetail = logindata(logindetails)
    logindetail.save().then((response) => {
        const registerdetails = {
            login_id: response._id,

            Email: req.body.Email


        }

        var registerdetail = registerdata(registerdetails)
        registerdetail.save().then((response) => {


            console.log("successfully registerd" + response)
            res.send('sucessfully saved')
        })

        //res.redirect("register")

        console.log("successfully login" + response._id)

    })
})
mernrouter.get('/', (req, res) => {
    res.json({ log: 'login' })
})

mernrouter.post("/login", (req, res) => {

    logindata.findOne({
        Username: req.body.Username

    })
        .then((logindetail) => {
            console.log(logindetail)

            if (logindetail.Password === req.body.Password) {
                var token = jwt.sign({ Username: logindetail.Username, id: logindetail._id }, '98765');
                res.json({ details: 'success', token: token })
            }
            else
                res.json({ details: 'password not found' })

        }).catch((logindetail) => {
            res.render('login', { val: "User not exist" })
        })

})
mernrouter.post('/auth', (req, res) => {

})
mernrouter.post('/home', auth, (req, res) => {
    const home = req.userData.Username;
    console.log(home)
    res.send({ details: 'success',home:home })

})
mernrouter.post('/postjob', (req, res) => {
    const jobsdetails = {
        Company:req.body.Company,
        Location:req.body.Location,
        Discription:req.body.Discription,
        Employ:req.body.Employ,
        Found:req.body.Found,
        Logo:req.body.Logo
       
    }
    console.log(req.body)
    var jobdatas=jobdata(jobsdetails)
    jobdatas.save().then((response)=>{
        console.log("successfully added" +response)
          })
          res.redirect("/home")
        
})
    
mernrouter.get('/jobs',(req,res)=>{
    jobdata.find().then((viewjobs)=>{
        res.json(viewjobs)
        console.log("abcd",viewjobs)
    })
})
// mernrouter.get('/singleview/:id',(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     jobdata.findOne({_id:id}).then((job)=>{
//         console.log(job)
//         res.status(200).json({job:job})

//     })
// })
mernrouter.get("/singleview/:id",(req, res) => {
    jobdata.findById(
        req.params.id, (error, data) => {
      if (error) {
        return console.log(error);
      } else {
        res.json(data);
      }
    });
  })

// mernrouter.get("/edit/:id", (req, res) => {
//     const id = req.params.id;
// jobdata.findOne({
//    _id: id
// })
// .then((item) => {
   

//       res.render("edit",{item})
// })
// })
// mernrouter.post('/delete/:id', function(req, res) {
//     const id = req.params.id;
// jobdata.findByIdAndDelete({
//                 _id: id
//             },
//             job)
//         .then((job) => {

//             res.status(200).json({job:job})

//         })
//     })

mernrouter.post("/update/:id",(req,res,next)=>{
    jobdata.findOneAndUpdate(
        {_id:req.params.id},
        {
            $set:{
                Company:req.body.Company,
                Location:req.body.Location,
                Discription:req.body.Discription,
                Employ:req.body.Employ,
                Found:req.body.Found,
                Logo:req.body.Logo
               
            },
        },{new:true},
        (error,data)=>{
            if(error){
                console.log(error);

            }else{
                res.json(data);
                console.log(data);
                console.log("data updated successfully!")
            }
        }
    )
})
mernrouter.delete("/delete-data/:id",
(req,res,next)=>{
    jobdata.findByIdAndRemove(req.params.id,(error,data)=>{
    if(error){
        return next(error);
    }else{
        res.status(200).json({msg:data})
    }
    
})})
module.exports = mernrouter;