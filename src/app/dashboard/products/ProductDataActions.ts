"use server";
import { addProductToDB, updateProduct } from "@/app/lib/actions";
import { fetchSingleProduct } from "@/app/lib/fetchData";

export const fetchProductDataFunc = async (pathname: string) => {
  const id = pathname.split("/").at(3);
  const productData = await fetchSingleProduct(id);
  return productData;
};

export const updateProductFunc = async (
  pathname: string,
  data: Com.TproductFormData
) => {
  const id = pathname.split("/").at(3);
  updateProduct(id, data);
};

export const addProductFunc = async (formData: Com.TproductFormData) => {
  addProductToDB(formData);
};
