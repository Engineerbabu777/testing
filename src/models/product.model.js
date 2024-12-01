import mongoose from "mongoose"



const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    },
    quantity: {
        type: String,
        required: true
    },
})


export const Product = mongoose.model('Product', productSchema)