import React from "react";
import Product from "@/components/dashboard_ui/products/product";
import { fectchProducts } from "@/app/lib/fetchData";

const Products = async ({ searchParams }: Com.TsearchParams) => {
  const q = searchParams?.q || "";
  const itemsPerPage = Number(searchParams?.itemsPerPage || 1);
  const currentPage = Number(searchParams?.page || 1);
  const data = await fectchProducts(q, itemsPerPage, currentPage);
  const products = data?.products as Com.TproductData[];
  const productCount = Number(data?.productCount);
  return (
    <div>
      <Product productData={products} productCount={productCount} />
    </div>
  );
};

export default Products;
