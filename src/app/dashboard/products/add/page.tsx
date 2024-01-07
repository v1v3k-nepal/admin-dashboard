"use client";
import React, { useState } from "react";
import "./_addProduct.scss";
import { productCategoriesData } from "@/components/dashboard_ui";
import { SelectCategory } from "@/components/dashboard_ui";
import { addProductFunc } from "../ProductDataActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [categories, setCategories] = useState<Com.Tcategories>(
    () => productCategoriesData
  );

  const initialFormData = {
    productName: "",
    price: "",
    color: "",
    productImg: "",
    stock: "",
    size: "",
    category: productCategoriesData,
    desc: "",
  };

  const [formData, setFormData] =
    useState<Com.TproductFormData>(initialFormData);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData, "i am formdata inside handlesubmit");
    // addProductToDB(formData);
    const status = await addProductFunc(formData);
    status
      ? toast.success("Product Added to Database Successfully")
      : toast.error("Could not Add Product");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="add-product-container">
        <div className="cols">
          <div className="col-left">
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div className="col-right">
            <input
              type="text"
              placeholder="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Product Image URL"
              name="productImg"
              className="productImg"
              value={formData.productImg}
              onChange={handleChange}
            />
          </div>
        </div>
        <SelectCategory
          categories={categories}
          setCategories={setCategories}
          setFormData={setFormData}
        />
        <textarea
          name="desc"
          id="desc"
          value={formData.desc}
          onChange={handleChange}
          cols={30}
          rows={10}
          placeholder="Product Description"
        ></textarea>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddProduct;
