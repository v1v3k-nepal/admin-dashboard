"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
// import { signIn } from "../auth";
export const addUser = async (formData: Com.TuserFormData) => {
  const {
    username,
    email,
    password,
    phone,
    isAdmin,
    isActive,
    address,
    userImg,
  } = formData;
  // } = Object.fromEntries(formData);
  // console.log({username, email, password, phone, isAdmin, isActive, address, userImg})

  // const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    userImg,
    email,
    password: hashedPassword,
    phone,
    isAdmin: isAdmin,
    isActive: isActive,
    address,
    actions: ["View", "Delete"],
  });

  try {
    connectToDB();
    await newUser.save();
    revalidatePath("/dashboard/users");
    return true;
  } catch (e) {
    console.log(e);
    // throw new Error("cannot create new user", e.message);
    return false;
  }
};

export const updateUser = async (id: string, data: Com.TuserFormData) => {
  const { password } = data;
  // const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    connectToDB();
    await User.findByIdAndUpdate(id, { ...data, password: passwordHash });
    revalidatePath("/dashboard/users");
    return true;
  } catch (e) {
    console.log(e, "could not update user data");
    return false;
  }
};

export const addProductToDB = async (formData: Com.TproductFormData) => {
  const { productName, price, color, productImg, stock, size, category, desc } =
    formData;

  const newProduct = new Product({
    productName,
    price,
    color,
    productImg,
    stock,
    size,
    category,
    desc,
    actions: ["View", "Delete"],
  });

  try {
    connectToDB();
    await newProduct.save();
    revalidatePath("/dashboard/products");
    return true;
  } catch (e) {
    console.log(e);
    return false;
    // throw new Error("cannot create new Product", e.message);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
    revalidatePath("/dashboard/products");
    return true;
  } catch (e) {
    console.log(e);
    // throw new Error("cannot delete product ", e.message);
    return false;
  }
};

export const deleteUser = async (id: number) => {
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    revalidatePath("dashboard/users");
    return true;
  } catch (e) {
    console.log(e);
    // throw new Error("cannot delete user", e.message);
    return false;
  }
};

export const updateProduct = async (id: string, data: Com.TproductFormData) => {
  try {
    connectToDB();
    await Product.findByIdAndUpdate(id, data);
    revalidatePath("/dashboard/products");
    return true;
  } catch (e) {
    console.log(e, "could not update product data");
    return false;
  }
};

// export const authenticate = async (formData: Com.IloginFormData) => {
//   const { email, password } = formData;
//   try {
//     await signIn("credentials", { email, password });
//   } catch (error: any) {
//     console.log(error, "i am from action.ts");
//     if (error.message.includes("credentialssignin")) {
//       return { error: "Wrong Credentials" };
//     }
//     throw error;
//   }
// };
