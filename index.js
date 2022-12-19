const express = require('express')
const db=require("./Config/db")
const app = express()
const port = 3000
app.set("secretKey","mahmoudbouattay")
var cors = require('cors');
app.use(cors());
app.use(express.json())
const routeCategorie = require('./Routers/Categorie.Router')
const routerProduit = require("./Routers/Produit.Router")
const routerUser =require("./Routers/User.Router")
const routerWishlist = require("./Routers/Wishlist.Router") ;
app.use("/categorie",routeCategorie)
app.use("/produit",routerProduit)
app.use("/user",routerUser)
app.use("/wishlist",routerWishlist)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
