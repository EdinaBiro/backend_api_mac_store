const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    categoryId:{
        type: String,
        required: true,
    },
    categoryName:{
        type: String, 
        required: true,
    },
    image:{
        type: String,
        reqired: true,
    },
    subCategoryName:{
        type: String,
        reqired: true,
    },
});

const subCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = subCategory;