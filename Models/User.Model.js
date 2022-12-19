const mongoose = require("mongoose") ; 
const bcrypt = require("bcrypt") ;
var UserModel = new mongoose.Schema({
    nom : {
        type: String , 
        required : true , 
        
         
    } , 
    prenom : {
        type: String , 
        
         
    } , 
    email : {
        type : String , 
       
    } , 
    password : {
        type : String , 
  
    } , 
    avatar: {
        type : String ,
    },

})
UserModel.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
module.exports = mongoose.model('User',UserModel) ; 