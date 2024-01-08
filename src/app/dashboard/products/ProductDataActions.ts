"use server";
import { addProductToDB, updateProduct } from "@/app/lib/actions";
import { fetchSingleProduct } from "@/app/lib/fetchData";

export const fetchProductDataFunc = async (pathname: string) => {
  const id = pathname.split("/").at(3);
  const productData = await fetchSingleProduct(id as string);
  return productData;
};

export const updateProductFunc = async (
  pathname: string,
  data?: Com.TproductFormData
) => {
  const id = pathname.split("/").at(3);
  const status = await updateProduct(
    id as string,
    data as Com.TproductFormData
  );
  return status;
};

export const addProductFunc = async (formData: Com.TproductFormData) => {
  const status = await addProductToDB(formData);
  return status;
};
