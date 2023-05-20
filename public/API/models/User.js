import mongoose from "mongoose";

const UserSchems=new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    contact:{
        type:Number,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default:false 
    }
    

},{timestamps:true});


export default mongoose.model('User',UserSchems);