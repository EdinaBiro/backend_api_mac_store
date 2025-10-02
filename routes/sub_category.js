const express = require('express');
const subCategory = require('../models/sub_categories');
const subCategoryRouter = express.Router();

subCategoryRouter.post('/api/subcategories', async(req,res)=>{
    try{
        const {categoryId, categoryName, image, subCategoryName} = req.body;
        const subcategory = new subCategory({categoryId, categoryName, image, subCategoryName});
        await subcategory.save();
        res.status(201).send(subcategory);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

subCategoryRouter.get('/api/category/:categoryName/subcategories', async(req,res)=>{
    try{
    const {categoryName} = req.params;

    const subcategories = await subCategory.find({categoryName: categoryName});

    if(!subcategories|| subcategories.length == 0){
        return res.status(404).json({msg:"subcategories not found"});
    }else{
        return res.status(200).json(subcategories);
    }
}catch(e){
    res.status(500).json({error: e.message});
}
});

module.exports = subCategoryRouter;