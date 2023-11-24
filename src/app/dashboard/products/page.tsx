import React from "react";
import Product from "@/components/dashboard_ui/products/product";
import { fectchProducts } from "@/app/lib/fetchData";

const Products = async ({searchParams}: Com.TsearchParams) => {
  const q = searchParams?.q || "";
  const itemsPerPage = searchParams?.itemsPerPage || 1;
  const currentPage = searchParams?.page || 1;
  const productData:Com.TproductData | undefined = await fectchProducts(q, itemsPerPage, currentPage);
  return (
    <div>
      <Product data={productData} />
    </div>
  );
};

export default Products;
