import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register=async(req,res,next) => {
    try {
        const pass=req.body.password.toString();
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);
        const newUser=new User({
            username:req.body.name.toString(),
            contact:parseInt(req.body.contactNumber),
            email:req.body.email.toString(),
            password:hash
        })
        
        const user=await User.find({username:newUser.name});
        if(user){
            await newUser.save();
            res.status(201).json({
                message:"User registered successfully"
            })
        }
        else{
            res.status(404).json({
                message:"Username Already in use"
            })
        }
    } catch (error) {
        next(error);
    }
}

export const login=async(req,res,next) => {
    try {
        const pass=req.body.password.toString();
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(401).json({
                message:"User not found"
            })
        }
        const validPassword=bcrypt.compareSync(pass, user.password);
        if(!validPassword){
            return res.status(401).json({
                message:"Invalid password"
            })
        }
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},'YiYjChU896dYgEqZDi0ss44e3uCGZfoHPwAb6l17IHs=',{expiresIn:"1h"});
        const {password,isAdmin,...other}=user._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({
            ...other
        })
    } catch (error) {
        next(error);
    }
}