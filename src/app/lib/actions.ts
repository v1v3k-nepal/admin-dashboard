"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
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

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

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
  } catch (e: any) {
    console.log(e.message);
    // throw new Error("cannot create new user", e.message);
    return false;
  }
};

export const updateUser = async (id: string, data: Com.TuserFormData) => {
  try {
    connectToDB();
    await User.findByIdAndUpdate(id, data);
    revalidatePath("/dashboard/users");
    return true;
  } catch (e: any) {
    console.log(e.message, "could not update user data");
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
  } catch (e: any) {
    console.log(e.message);
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
  } catch (e: any) {
    console.log(e.message);
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
  } catch (e: any) {
    console.log(e.message);
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
  } catch (e: any) {
    console.log(e.message, "could not update product data");
    return false;
  }
};
