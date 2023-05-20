import User from "../models/User.js";


export const getUsers=async(req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json({users: users});
    } catch (error) {
        next(error);
    }
}

export const getUserById=async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({user: user});
    } catch (error) {
        next(error);
    }
}

export const updateUser=async(req,res,next)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({user: user});
    } catch (error) {
        next(error);
    }
}

export const deleteUser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User deleted"});
    } catch (error) {
        next(error);
    }
}