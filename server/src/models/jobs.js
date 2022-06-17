const mongoose=require("mongoose");
const Schema=mongoose.Schema
const JobSchema= new Schema (
    {
       
       Company:String,
       Location:String,
       Discription:String,
       Employ:Number,
       Found:Number,
       Logo:String
       
    }
    
)
const jobdata=mongoose.model("jobs",JobSchema)
module.exports=jobdata;