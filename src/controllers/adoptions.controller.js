import { adoptionsService, petsService, usersService } from "../services/index.js"
import mongoose from "mongoose";

const getAllAdoptions = async(req,res)=>{
    const result = await adoptionsService.getAll();
    res.send({status:"success",payload:result})
}

const getAdoption = async(req,res)=>{
    const adoptionId = req.params.aid;
    const adoption = await adoptionsService.getBy({_id:adoptionId})
    if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
    res.send({status:"success",payload:adoption})
}

const createAdoption = async(req,res)=>{
    const {uid,pid} = req.params;
    if (!mongoose.isValidObjectId(uid)) {
        return res.status(400).send({ status: "error", error: "Invalid user ID format" });
    }
    if (!mongoose.isValidObjectId(pid)) {
        return res.status(400).send({ status: "error", error: "Invalid pet ID format" });
    }
    const user = await usersService.getUserById({_id:uid});
    if(!user) return res.status(404).send({status:"error", error:"user Not found"});
    const pet = await petsService.getPetById({_id:pid});
    if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});
    if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
    user.pets.push(pet._id);
    await usersService.update(user._id,{pets:user.pets})
    await petsService.update(pet._id,{adopted:true,owner:user._id})
    await adoptionsService.create({owner:user._id,pet:pet._id})
    res.send({status:"success",message:"Pet adopted"})
}

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption
}