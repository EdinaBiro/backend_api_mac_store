const express = require('express');
const subCategory = require('../models/sub_categories');
const subCategoryRouter = express.Router();

subCategoryRouter.post('/api/subcategories', async(req,res)=>{
    try{
        const {categoryId, categoryName, image, subCategoryName} = req.body;
        const subcategory = new subCategory({categoryId, categoryName, image, subCategoryName});
        await subCategory.save();
        res.status(201).send(subcategory);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

module.export = subCategoryRouter;