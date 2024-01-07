"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const addUser = async (formData) => {
  console.log(formData);
  const {
    username,
    email,
    password,
    phone,
    isAdmin,
    isActive,
    address,
    userImg,
  } = Object.fromEntries(formData);
  // console.log({username, email, password, phone, isAdmin, isActive, address, userImg})

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    userImg,
    email,
    password: hashedPassword,
    phone,
    isAdmin: isAdmin === "true" ? true : false,
    isActive: isActive === "true" ? true : false,
    address,
    actions: ["View", "Delete"],
  });

  try {
    connectToDB();
    await newUser.save();

    return true;
  } catch (e) {
    console.log(e.message);
    // throw new Error("cannot create new user", e.message);
    return false;
  }
};

export const updateUser = async (id, data) => {
  try {
    connectToDB();
    await User.findByIdAndUpdate(id, data);
    return true;
  } catch (e) {
    console.log(e.message, "could not update user data");
    return false;
  }
};

export const addProductToDB = async (formData) => {
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
  } catch (e) {
    console.log(e.message);
    // throw new Error("cannot create new Product", e.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
    revalidatePath("/dashboard/products");
    return true;
  } catch (e) {
    console.log(e.message);
    // throw new Error("cannot delete product ", e.message);
    return false;
  }
};

export const deleteUser = async (id) => {
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    revalidatePath("dashboard/users");
    return true;
  } catch (e) {
    console.log(e.message);
    // throw new Error("cannot delete user", e.message);
    return false;
  }
};

export const updateProduct = async (id, data) => {
  try {
    connectToDB();
    await Product.findByIdAndUpdate(id, data);
    return true;
  } catch (e) {
    console.log(e.message, "could not update product data");
    return false;
  }
};
