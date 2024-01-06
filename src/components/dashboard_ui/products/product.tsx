"use client";
import React from "react";
import Table from "../table/table";
import Image from "next/image";
import Link from "next/link";
import "../users/_users.scss";
import { TableTopPart } from "../tableTopPart/tableTopPart";
import { deleteProduct } from "@/app/lib/actions";

const Product = ({
  productData,
  productCount,
}: {
  productData?: Com.TproductData[];
  productCount: number;
}) => {
  // const theadData = ["Product", "Description", "Created At", "Price", "Stock", "Action"]

  return (
    <div className="product-container">
      <TableTopPart
        path="/dashboard/products/add"
        placeholder="Search for a Product..."
      />
      <Table
        data={!!productData ? productData : []}
        itemCount={productCount}
        columns={[
          {
            thead: "Product",
            field: "productName",
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
              return <span className="description">{item}</span>;
            },
          },
          // {
          //   thead: "Created At",
          //   field: "createdAt",
          //   render: (item) => {
          //     return <span>{item}</span>;
          //   },
          // },
          {
            thead: "Color",
            field: "color",
            render: (item) => {
              return <span>{item}</span>;
            },
          },
          {
            thead: "Price",
            field: "price",
            render: (item) => {
              return <span>NPR {item}</span>;
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
                  <Link href={`/dashboard/products/${obj?._id}`}>
                    <button className="view">{obj?.actions[0]}</button>
                  </Link>
                  <button
                    className="delete"
                    onClick={() => deleteProduct(obj?._id)}
                  >
                    {obj?.actions[1]}
                  </button>
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
