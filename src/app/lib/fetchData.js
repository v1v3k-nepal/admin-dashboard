import { Product, User } from "./models.js";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, itemsPerPage, page)=>{
    connectToDB();
    console.log("i am fetchusers",q)
    const regex = new RegExp(q, "i")
    try{
      const users =  await User.find({username: {$regex: regex}})
      .limit(itemsPerPage)
      .skip(itemsPerPage*(page-1));

      // console.log("i am fetchusers : success",users)
      return users;
    }catch(e){
      console.log("i am fetchUsers:  error", e)
    }
  }

export const fectchProducts = async()=>{
  connectToDB();
  try{
    const products = await Product.find();
    return products
  }catch(e){
    console.log("i am fetchProducts : error", e)
  }
}
