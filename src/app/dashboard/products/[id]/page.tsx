"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./_singleProductPage.scss";
import {
  SelectCategory,
  productCategoriesData,
} from "@/components/dashboard_ui";
import { usePathname } from "next/navigation";
import { fetchProductDataFunc, updateProductFunc } from "../ProductDataActions";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProductPage = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState<Com.TproductFormData>();
  const [categories, setCategories] = useState<Com.Tcategories>();
  const [productData, setProductData] = useState<Com.TproductFormData>();

  useEffect(() => {
    (async () => {
      const data = (await fetchProductDataFunc(pathname)) as Com.TproductData;
      // setformData(data);
      setCategories(data?.category);
      setTimeout(() => {
        setProductData(data);
      }, 2000);
      // console.log(data);

      const initialFormData: Com.TproductFormData = {
        productName: data?.productName ? data.productName : "",
        price: data?.price ? data.price : "",
        color: data?.color ? data.color : "",
        productImg: data?.productImg ? data.productImg : "",
        stock: data?.stock ? data.stock : "",
        size: data?.size ? data.size : "",
        category: data?.category ? data.category : productCategoriesData,
        desc: data?.desc ? data.desc : "",
      };
      setFormData(initialFormData);
    })();
  }, [pathname]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    formData && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "i am formdata inside handlesubmit");
    const status = await updateProductFunc(pathname, formData);
    console.log(status, "product update status");
    setTimeout(() => {
      status
        ? toast.success("Product Data Updated Successfully")
        : toast.error("Could Not Update Product Data");
    }, 500);
  };

  const skeletonStyle = {
    borderRadius: "8px",
    height: "50px",
  };

  return (
    <div className="single-product-page">
      <div className="product-name-container">
        <div className="product-image-container">
          {productData ? (
            <Image
              src={formData?.productImg as string}
              alt="Product image"
              height={200}
              width={200}
              className="product-img"
            />
          ) : (
            <Skeleton
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "10px",
              }}
            />
          )}
        </div>
        {productData ? (
          <div className="product-name">{formData?.productName}</div>
        ) : (
          <Skeleton
            style={{
              height: "35px",
              borderRadius: "8px",
              width: "200px",
            }}
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="productName">Product Name</label>
          {productData ? (
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name"
              value={formData?.productName}
              onChange={handleChange}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input-container">
          <label htmlFor="productImg">Product Image</label>
          {productData ? (
            <input
              type="text"
              name="productImg"
              placeholder="Product Image URL"
              value={formData?.productImg}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input-container">
          <label htmlFor="price">Price</label>
          {productData ? (
            <input
              type="price"
              id="price"
              name="price"
              placeholder="Price"
              value={formData?.price}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input-container">
          <label htmlFor="color">Color</label>
          {productData ? (
            <input
              type="text"
              id="color"
              name="color"
              placeholder="Color"
              value={formData?.color}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input-container">
          <label htmlFor="stock">Stock</label>
          {productData ? (
            <input
              type="stock"
              id="stock"
              name="stock"
              placeholder="Stock"
              value={formData?.stock}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input-container">
          <label htmlFor="size">Size</label>
          {productData ? (
            <input
              type="text"
              id="size"
              name="size"
              placeholder="Size"
              value={formData?.size}
              onChange={handleChange}
              required={true}
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <SelectCategory
          categories={formData?.category as Com.Tcategories}
          setCategories={
            setCategories as React.Dispatch<
              React.SetStateAction<Com.Tcategories>
            >
          }
          setFormData={
            setFormData as React.Dispatch<
              React.SetStateAction<Com.TproductFormData>
            >
          }
        />
        {productData ? (
          <textarea
            name="desc"
            id="desc"
            cols={30}
            rows={10}
            placeholder="Product Description"
            value={formData?.desc}
            onChange={handleChange}
            required={true}
          ></textarea>
        ) : (
          <Skeleton style={{ height: "250px", borderRadius: "8px" }} />
        )}
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleProductPage;
