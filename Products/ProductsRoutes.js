const Product=require('./ProductSchema');
const express=require('express');

const  getproduct= async (req,res)=>{
    try {
        const product=await Product.find({});
        res.send(product);
    } catch (error) {
        console.log(error)
    }
}

const findoneproduct= async(req,res)=>{
    const name=req.params.name;
    try {
        const product=await Product.find({name});
        res.send(product);
    } catch (error) {
        console.log(error)
    }
}

const addproduct=async(req,res)=>{
    const { name, desc, price } = req.body;
    try {
        const product=new Product({name, desc, price})
        await product.save();
        res.send(product)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports={
    getproduct,
    findoneproduct,
    addproduct
}