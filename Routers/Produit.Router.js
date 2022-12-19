const ProduitController=require("../Controllers/Produit.Controller") ; 
const express= require ('express') ; 
const router = express.Router() ; 
const upload = require ("../middleware/Uplode")
router.post("/",upload.single('photo'),ProduitController.add) ; 
router.delete("/:id",ProduitController.delete)
router.get("/",ProduitController.find) ;
router.get("/:id",ProduitController.findBy)
router.put("/:id",ProduitController.update)
module.exports=router ; 