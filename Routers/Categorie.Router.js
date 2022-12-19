const CategorieController= require('../Controllers/Categorie.Controller');
const express = require("express") ; 
const router = express.Router() ; 
router.post("/",CategorieController.add) ; 
router.get("/",CategorieController.find);
module.exports=router ; 