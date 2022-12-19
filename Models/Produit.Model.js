const mongoose= require("mongoose") ; 
const ProduitModel= new mongoose.Schema({
    nom : {
        type :String ,  
        required : true , 
        unique: true
    } , 
    prix : {
        type : String , 
    
    },
    photo : {
        type: String ,
    },
    categorie : { type:mongoose.Schema.Types.ObjectId,ref:"Categorie"},
    
})
module.exports = mongoose.model("Produit",ProduitModel) ; 