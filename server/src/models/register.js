const mongoose=require("mongoose");
const Schema=mongoose.Schema
const RegisterSchema= new Schema (
    {
        login_id:{type:Schema.Types.ObjectId,ref:"login"},

       Email:String,
       
       
    }
    
)
const registerdata=mongoose.model("register",RegisterSchema)
module.exports=registerdata;