import UserModel from "../model/user.model.js";

export const getAlluser =async(req,res)=>{
  console.log("Get all user")
}


export const createUser =async(req,res)=>{
  try{
    const newUser =req.body;

    await UserModel.create(newUser);
    return res.status(201).json({
      message:"User Create Successfully",
      data:newUser
    })


  }catch(error){
    console.log(error)
    return res.status(500).json({message:"Internal Server Error"});
  }
}


export const updateUser =async(req,res)=>{
  console.log("update user")
}

export const deleteUser =async(req,res)=>{
  console.log("Delete user")
}