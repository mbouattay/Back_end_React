const WishlistModel = require("../Models/Wishlist.Model") ;
const WishlistController ={
    add : (req,res)=>{
        const Wishlist = WishlistModel(req.body)
        Wishlist.save((err,item)=>{
             if(err){
                console.log(err) ; 
                res.json(err)
            }
            res.json(item) ; 
        })
    } , 
    get: (req,res)=>{
        WishlistModel.find({},(err,item)=>{
            if(err){
                console.log("err",err) ; 
                res.json(err)
            }
            res.json(item)
        }).populate("Produit")
    } , 
    delete : (req,res)=>{
        WishlistModel.deleteOne({
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
module.exports = WishlistController ; 