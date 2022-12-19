const path = require("path") ; 
const multer=require("multer")
var stroate = multer.diskStorage({
    destination : function(re,file,cb){
        cb(null,'uploads')
    },
    filename : function (req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})
var upload =multer({
    storage:stroate,
    fileFilter : function(req,file,callback){
       
            callback(null,true)
       
    },
    limits:{
        fieldSize : 1024 *1024 *2 
    }
})
module.exports = upload