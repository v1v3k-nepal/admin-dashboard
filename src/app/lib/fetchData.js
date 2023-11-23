import { User } from "./models.js";
import { connectToDB } from "./utils";

export const fetchUsers = async ()=>{
    connectToDB();
    try{
      const users =  await User.find();
      console.log("i am fetchusers : success",users)
      return users
    }catch(e){
      console.log("i am fetchUsers:  error", e)
    }
  } 