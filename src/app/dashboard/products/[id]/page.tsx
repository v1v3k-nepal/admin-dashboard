import React from "react";
import Image from "next/image";
import "./_singleProductPage.scss";
import { fetchSingleProduct } from "@/app/lib/fetchData";

const SingleProductPage = async({params}: {params: {id: string}}) => {
  const {id} = params;
  const productData = await fetchSingleProduct(id);
  console.log("i am single product page",params)
  return (
    <div className="single-product-page">
      <div className="product-name-container">
        <div className="product-container">
          <Image
            // src="/iphone-15-pro-max-white.webp"
            src={productData?.productImg}
            alt="Product image"
            fill
            className="product-img"
          />
        </div>
        <span className="product-name">{productData?.productName}</span>
      </div>
      <form action="">
        <div className="input">
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" placeholder="Product Name" value={productData?.productName}/>
        </div>
        <div className="input">
          <label htmlFor="price">Price</label>
          <input type="price" id="price" placeholder="Price" value={productData?.price}/>
        </div>
        <div className="input">
          <label htmlFor="color">Color</label>
          <input type="text" id="color" placeholder="Color" value={productData?.color}/>
        </div>
        <div className="input">
          <label htmlFor="category">Choose a Category</label>
          <select name="category" id="category">
            <option value="Electronics">Electronics</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="stock">Stock</label>
          <input type="stock" id="stock" placeholder="Stock" value={productData?.stock}/>
        </div>
        <div className="input">
          <label htmlFor="size">Size</label>
          <input type="text" id="size" placeholder="Size" value={productData?.size}/>
        </div>
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder="Product Description" value={productData?.desc}></textarea>
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleProductPage;
