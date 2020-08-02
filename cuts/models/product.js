const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: {
        type: String,
        required: true,
        unique: true,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;