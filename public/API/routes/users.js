import express from "express";

import { updateUser,deleteUser,getUserById,getUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

// router.get('/checkauthorization',verifyToken,(req, res) =>{
//     res.send("Authorized");
// });
// router.get('/checkuser/:id',verifyUser,(req, res) =>{
//     res.send("Authorized");
// });
// router.get('/checkadmin/:id',verifyAdmin,(req, res) =>{
//     res.send("admin here");
// });
//Update
router.put('/:id',verifyUser,updateUser);
//Delete
router.post('/:id',verifyUser, deleteUser);
//GetAll
router.get('/',verifyAdmin, getUsers);
//Get
router.get('/:id',verifyUser, getUserById);

export default router;