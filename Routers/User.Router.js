const UserController =require ("../Controllers/User.Controller");
const express =require("express") ; 
const router = express.Router() ; 
const upload = require ("../middleware/Uplode")
router.post("/register",upload.single('avatar'),UserController.add) ;
router.post("/login",UserController.login)
router.post("/logout",UserController.logout)
module.exports=router ;