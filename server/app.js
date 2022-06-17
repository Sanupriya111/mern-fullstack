var express = require('express')
const mongoose=require("mongoose");
var app = express();
var mernrouter=require('./src/routers/mern')
var cors=require('cors');
const path=require("path")
// var jobsRouter=require('./src/routers/jobs')
mongoose.connect("mongodb+srv://sanubijin:sanubijinyash@cluster0.wj2bk.mongodb.net/Mern?retryWrites=true&w=majority",()=>{console.log("db connected")})
//app.use(express.json())
// app.use(express.static('./assets'));
//app.use(express.urlencoded({extended:true}))
//app.get('/*',(req,res)=>{
  //  res.sendFile(path.join(__dirname,'./build'))
  //})
  //app.use(express.static(path.join(__dirname,'./build')))  

app.use(cors())
app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin','*')
res.header("Access-Control-Allow-Headers","X-Requested-With");
res.header("Access-Control-Allow-Headers", "Content-Type");
res.header("Access-Control-Allow-Methods" ,"GET,POST,PATCH,PUT,DELETE,OPTIONS" );
next();
})
app.use('/',mernrouter)
// app.use('/postjob',jobsRouter)
app.listen(3400, () => {
    console.log("server is listening to port :3400");
})