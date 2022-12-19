const mongoose =  require ("mongoose") ; 
var CategorieSchema = new mongoose.Schema({
    nom : {
        type: String , 
        required : true , 
        unique : true ,
        index : true 
    },
    produits :{
        type : [{ type:mongoose.Schema.Types.ObjectId,ref:"Produit"}]
    }
})
module.exports =  mongoose.model('Categorie',CategorieSchema) ;