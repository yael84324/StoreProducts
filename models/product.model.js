const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    image:{
        type: String,
    }
})

module.exports = mongoose.model('product', ProductSchema)