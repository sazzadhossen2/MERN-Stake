

export const createUserService = (req,res)=>{
  try{
    let reqBody =req.body;
    return {status:"Success",message:"User Create Successfully",data:reqBody}
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Internal Server Error"})
  }
}