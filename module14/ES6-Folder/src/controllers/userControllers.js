
import { createUserService } from "../service/StudentService.js"


//Create User Controller
export const createUserController =async (req,res)=>{
  let result =createUserService
  (req,res);
  return res.status(200).json(result);
}