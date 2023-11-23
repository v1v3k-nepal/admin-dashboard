import React from "react";
import Image from "next/image";
import "./_singleProductPage.scss";

const SingleProductPage = () => {
  return (
    <div className="single-product-page">
      <div className="product-name-container">
        <div className="product-container">
          <Image
            src="/iphone-15-pro-max-white.webp"
            alt="Product image"
            fill
            className="product-img"
          />
        </div>
        <span className="product-name">Iphone</span>
      </div>
      <form action="">
        <div className="input">
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" placeholder="Product Name" />
        </div>
        <div className="input">
          <label htmlFor="price">Price</label>
          <input type="price" id="price" placeholder="Price" />
        </div>
        <div className="input">
          <label htmlFor="color">Color</label>
          <input type="text" id="color" placeholder="Color" />
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
          <input type="stock" id="stock" placeholder="Stock" />
        </div>
        <div className="input">
          <label htmlFor="size">Size</label>
          <input type="text" id="size" placeholder="Size" />
        </div>
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder="Product Description"></textarea>
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleProductPage;
