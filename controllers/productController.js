const Product = require("../models/ProductModel");


// ADD PRODUCT
exports.createProduct = async (req,res,next)=>{
 try{

  const product = await Product.create(req.body);

  res.status(201).json(product);

 }catch(error){
  next(error);
 }
};


// GET ALL PRODUCTS
exports.getProducts = async (req,res,next)=>{
 try{

  const products = await Product.find();

  res.status(200).json(products);

 }catch(error){
  next(error);
 }
};


// GET PRODUCT BY ID
exports.getProductById = async (req,res,next)=>{
 try{

  const product = await Product.findById(req.params.id);

  if(!product){
    return res.status(404).json({message:"Product not found"});
  }

  res.status(200).json(product);

 }catch(error){
  next(error);
 }
};


// UPDATE PRODUCT
exports.updateProduct = async (req,res,next)=>{
 try{

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true,runValidators:true}
  );

  if(!product){
    return res.status(404).json({message:"Product not found"});
  }

  res.status(200).json(product);

 }catch(error){
  next(error);
 }
};


// DELETE PRODUCT
exports.deleteProduct = async (req,res,next)=>{
 try{

  const product = await Product.findByIdAndDelete(req.params.id);

  if(!product){
    return res.status(404).json({message:"Product not found"});
  }

  res.status(200).json({message:"Product deleted successfully"});

 }catch(error){
  next(error);
 }
};


// SEARCH BY NAME
exports.searchProduct = async (req,res,next)=>{
 try{

  const name = req.query.name;

  const products = await Product.find({
    productName:{$regex:name,$options:"i"}
  });

  res.status(200).json(products);

 }catch(error){
  next(error);
 }
};


// FILTER BY CATEGORY
exports.filterCategory = async (req,res,next)=>{
 try{

  const cat = req.query.cat;

  const products = await Product.find({category:cat});

  res.status(200).json(products);

 }catch(error){
  next(error);
 }
};