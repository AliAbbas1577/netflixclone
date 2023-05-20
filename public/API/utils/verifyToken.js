import jwt from "jsonwebtoken"
import {createError} from "./error.js"

export const verifyToken=(req,res,next) => {
    const token=   req.cookies.access_token;
    if(!token) return res.status(504).json({message: "not token available"});
    jwt.verify(token,'YiYjChU896dYgEqZDi0ss44e3uCGZfoHPwAb6l17IHs=',(err,user)=>{
        if(err) return next(createError(403,"Token Not Valid"));
        req.user=user;
        next();
    })
}


export const verifyUser=(req,res,next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin) return next();
        if(!req.user) return res.status(403).json({message: "you are not authorized"});
    });
}

export const verifyAdmin=(req,res,next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin) return next();
        if(!req.user) return res.status(403).json({message: "you are not authorized"});
    });
}