const mongoose= require("mongoose") ; 
const WishlistModel= new mongoose.Schema({
    
    user : { type:mongoose.Schema.Types.ObjectId,ref:"User"},
    Produit :{type:mongoose.Schema.Types.ObjectId,ref:"Produit"}
    
})
module.exports = mongoose.model("Wishlist",WishlistModel); 