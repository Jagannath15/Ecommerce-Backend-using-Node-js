const mongoose =require('mongoose');
const express=require('express');
const bodyParser = require('body-parser');
const product = require('./Products/ProductsRoutes');
const user=require('./Users/UserRoutes')

var app=express();

     mongoose.connect('mongodb://0.0.0.0:27017/ecom', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .then(()=>app.listen(8080))
  .catch((err) => console.log(err));


app.use(express.json())
app.use(bodyParser.json());


app.post('/signup',user.createUser)
app.post('/login',user.login)





//Product releted routing ----------------
//addproduct
app.post('/add', product.addproduct)
//getproduct
app.get('/all',product.getproduct)
//filterproduct
app.get('/byname/:name',product.findoneproduct)





