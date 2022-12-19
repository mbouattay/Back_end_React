const CategorieModel= require("../Models/Categorie.Model") ; 
const CategorieController ={
        add : function(req,res){
            const Categorie=CategorieModel (req.body) ;
            Categorie.save((err,item)=>{
                if(err){
                    console.log(err) ; 
                    res.json(err) ;  
                }
                res.json(item) ;
            })
        },
        find : (req,res)=>{
            CategorieModel.find({},(err,items)=>{
                if(err){
                        console.log("error is ",err) ; 
                        res.json(err) ;
                }
                res.json(items) ;
            }).populate("produits");
           
        },
}
module.exports=CategorieController;