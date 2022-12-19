const WishlistController=require("../Controllers/Wishlist.Controller") ;
const express = require("express") ; 
const router = express.Router() ;
router.post("/",WishlistController.add) 
router.get("/",WishlistController.get)
router.delete("/:id",WishlistController.delete)
module.exports=router ;