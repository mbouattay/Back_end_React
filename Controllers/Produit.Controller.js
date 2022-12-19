const ProduitModel=require('../Models/Produit.Model') ;
const CategorieModel =require('../Models/Categorie.Model') 
const ProduitController ={
    add : function(req,res){
        const Produit=ProduitModel(req.body);
        Produit.save(async(err,item)=>{
           
               Produit.photo =req.file.path
      
            if(err){
                console.log(err) ; 
                res.json(err)
            }
            await CategorieModel.update ({_id:req.body.categorie},{$push: { produits: item.id }})
            res.json(item) ; 
        })
    } ,
    delete : (req,res)=>{
        ProduitModel.deleteOne({
            _id:req.params.id
        },(err,item)=>{
            if(err){
                console.log(err) ; 
                res.json(err)
            }
            res.json(item)
        })
    } , 
    find :  (req,res)=>{
        ProduitModel.find({},(err,items)=>{
            if(err){
                    console.log("error is ",err) ; 
                    res.json(err) ;
            }
            res.json(items) ;
        })
       
    },
    findBy: (req,res)=>{
        ProduitModel.findOne({_id:req.params.id},(err,item)=>{
            if(err){
                console.log("Error is : " ,err) ; 
                res.json(err) ; 
            }
            res.json(item)
        })
    },
    update : (req,res)=>{
        ProduitModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,item)=>{
            if(err){
                console.log("Error is ",err)
                res.json(err)
            }
            res.json(item)
        })
    }


}
module.exports=ProduitController ; 