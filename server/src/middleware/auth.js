const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
try{
const token=req.headers.authorization
console.log("token split",token)
const decode=jwt.verify(token,'98765');
req.userData={
    Username:decode.Username,
    id:decode.id
}
console.log("userdata  : ",req.userData)
next();
}catch(error){
console.log(error)
}
}