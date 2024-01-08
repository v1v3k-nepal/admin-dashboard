import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (
  q: string,
  itemsPerPage: number,
  page: number
) => {
  connectToDB();
  console.log("i am fetchusers", q);
  const regex = new RegExp(q, "i");
  try {
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));

    const userCount = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    // console.log("i am fetchusers : success",users)
    return { users, userCount };
  } catch (e) {
    console.log("i am fetchUsers:  error", e);
  }
};

export const fectchProducts = async (
  q: string,
  itemsPerPage: number,
  page: number
) => {
  connectToDB();
  const regex = new RegExp(q, "i");
  try {
    const products = await Product.find({ productName: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));

    const productCount = await Product.find({
      productName: { $regex: regex },
    }).countDocuments();

    return { products, productCount };
  } catch (e) {
    console.log("i am fetchProducts : error", e);
  }
};

export const fetchSingleProduct = async (id: string) => {
  connectToDB();
  try {
    const product = await Product.findById(id);
    return product;
  } catch (e) {
    console.log("i am fetch single product : error", e);
  }
};

export const fetchSingleUser = async (id: string) => {
  connectToDB();
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log("i am fetch single User : error", e);
  }
};
