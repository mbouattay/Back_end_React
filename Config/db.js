const mongoose = require("mongoose") ; 
mongoose.Promise=global.Promise ; 
mongoose.connect('mongodb://localhost:27017/SHOP',{
    useNewUrlParser:true,
},(err)=>{
    if(!err){
        console.log("db connection succeeded . ")
    } else{
        console.log('Error in db conection'+err)
    }
});