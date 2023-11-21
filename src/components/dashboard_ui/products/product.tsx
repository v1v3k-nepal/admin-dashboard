import React from "react";
import Table from "../table/table";
import { productData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import "../users/_users.scss";
import { TableTopPart } from "../tableTopPart/tableTopPart";

const Product = () => {
  // const theadData = ["Product", "Description", "Created At", "Price", "Stock", "Action"]
  return (
    <div className="product-container">
      <TableTopPart path="/dashboard/products/add" placeholder="Search for a Product..."/>
      <Table
        data={productData}
        columns={[
          {
            thead: "Product",
            field: "product",
            render: (item, obj) => {
              return (
                <div className="details">
                  {obj?.productImg && (
                    <Image
                      src={obj.productImg}
                      alt="image icon"
                      height={40}
                      width={40}
                      className="img"
                    ></Image>
                  )}
                  <span>{item}</span>
                </div>
              );
            },
          },
          {
            thead: "Description",
            field: "desc",
            render: (item) => {
              return <span>{item}</span>;
            },
          },
          {
            thead: "Created At",
            field: "createdAt",
            render: (item) => {
              return <span>{item}</span>;
            },
          },
          {
            thead: "Price",
            field: "price",
            render: (item) => {
              return <span>{item} $</span>;
            },
          },
          {
            thead: "Stock",
            field: "stock",
            render: (item) => {
              return <span>{item}</span>;
            },
          },
          {
            thead: "Actions",
            field: "actions",
            render: (item, obj) => {
              return (
                <div className="btn-container">
                  <Link href={`/dashboard/products/${obj?.id}`}>
                    <button className="view">{obj?.actions[0]}</button>
                  </Link>
                  <button className="delete">{obj?.actions[1]}</button>
                </div>
              );
            },
          },
        ]}
      />
    </div>
  );
};

export default Product;
