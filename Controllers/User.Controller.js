const UserModel = require("../Models/User.Model") ;
const jwt =require("jsonwebtoken") ; 
const tokenlist={}
const bcrypt = require("bcrypt") ;
const UserController = {
    add : function(req, res) {
        const User = UserModel(req.body) ; 
        if(req.file){
                User.avatar =req.file.path
        }
        User.save((err,item)=>{
            if(err){
                console.log("err " +err) ; 
                res.json(err) 
            }
            res.json(item) ;
        })
    },
    login: function (req, res, next) {
        UserModel.findOne({ email: req.body.email },  (err, userInfo)=> {
            if (err) {
                next(err);
            } else {
                if(userInfo!=undefined){
                    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                        const refresh_token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '2h' });
                        tokenlist[refresh_token] = {refresh_token:refresh_token}
                        console.log(tokenlist)
                        res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token, refresh_token: refresh_token } });
                    }
                }
               
                else {
                    res.json({ status: "error", message: " email not found !!!", data: null });
                }
            }
        });
    },
    logout: function (req, res) {
        if(req.body.refresh_token && req.body.refresh_token in tokenlist) {
            delete tokenlist[req.body.refresh_token]
            res.json({ status: "success", message: "log out !!!", data: null });
        }
       else {
        res.json({ status: "success", message: "refresh token not found!!!", data: null});
    }
    },  
    find :  (req,res)=>{
        UserModel.find({},(err,items)=>{
            if(err){
                    console.log("error is ",err) ; 
                    res.json(err) ;
            }
            res.json(items) ;
        })
       
    },
    delete : (req,res)=>{
        UserModel.deleteOne({
            _id:req.params.id
        },(err,item)=>{
            if(err){
                console.log(err) ; 
                res.json(err)
            }
            res.json(item)
        })
    } , 
    
}
module.exports=UserController ; 