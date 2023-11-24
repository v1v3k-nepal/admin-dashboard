import React from "react";
import Product from "@/components/dashboard_ui/products/product";
import { fectchProducts } from "@/app/lib/fetchData";

const Products = async () => {
  const productData: any = await fectchProducts();
  return (
    <div>
      <Product data={productData} />
    </div>
  );
};

export default Products;
