import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        min:2,
        max: 25,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userImg: {
        type: String,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default:false,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String
    },
    actions: {
        type: Array,
    }
}, {timestamps: true})


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min:0,
    },
    productImg: {
        type: String,
        required: true,
    },
    color: {
        type: String
    },
    size: {
        type: String,
    },
    category: {
        type: Array,
    },
    actions:{
        type: Array,
    }
}, {timestamps: true})

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);

