//create router to handle user api reqs
const { response } = require('express');
const exp=require('express');
const productApp=exp.Router()

const expressAsyncHandler=require('express-async-handler')
// to extract body of request object
productApp.use(exp.json())


//route to get all products
productApp.get('/getproducts',expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject=request.app.get("productCollectionObject")
    //read all products
    let products=await productCollectionObject.find().toArray()
    //send response
    response.send({message:"All products",payload:products})
}))

//route to get product by id
productApp.get('/getproduct/:id',expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject=request.app.get("productCollectionObject")
    //get productId from url param
    let pid=(+request.params.id);
    //get product by id
    let product=await productCollectionObject.findOne({productId:pid})
    //if product not existed with given id
    if(product==null)
    {
        response.send({message:"product with given id not existed"})
    }
    else{
        response.send({message:"product existed",payload:product})
    }
}))


//route to create a product
productApp.post('/create-product',expressAsyncHandler(async(request,response,next)=>{
    
       //get productCollectionObject
    let productCollectionObject=request.app.get("productCollectionObject")
    //get product obj sent by client
    let productObj=request.body
    //insert productObj
    let result=await productCollectionObject.insertOne(productObj)
    //send response
    response.send({message:"Product created successfully"})
    
    
}))


//route to update product
productApp.put('/update-product',expressAsyncHandler(async(request,response)=>{
     //get productCollectionObject
     let productCollectionObject=request.app.get("productCollectionObject")
     //get modified obj
     let modifiedProduct=request.body
     //update
     await productCollectionObject.updateOne({productId:modifiedProduct.productId},{$set:{...modifiedProduct}})
     //send response
     response.send({message:"product modified"})
}))

//route to delete a product
productApp.delete('/remove-product/:id',expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject=request.app.get("productCollectionObject")
    //get productId from url param
    let pid=(+request.params.id);
    //delete
    let product=await productCollectionObject.deleteOne({productId:pid})
    //if product not existed with given id
    if(product==null)
    {
        response.send({message:"product with given name not existed"})
    }
    else{
        response.send({message:"product deleted"})
    }

}))
//export userApp
module.exports=productApp;