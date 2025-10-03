const express = require('express');
const ProductReview = require('../models/product_review');

const ProductReviewRouter = express.Router();

ProductReviewRouter.post('/api/product-review', async(requestAnimationFrame,res)=>{
    try{
    const {buyerId, email, fullName, productId,rating, review} = requestAnimationFrame.body;
    const reviews = new ProductReview({buyerId, email, fullName, productId,rating, review});
    await reviews.save();
    return res.status(201).send(reviews);
    }catch(e){
        res.status(500).json({error: e.messsage});
    }
});