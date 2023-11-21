"use client"
import React from "react";
import Table from "../table/table";
import { usersData } from "@/app/lib/data";
import Image from "next/image";
import "./_users.scss";
import Link from "next/link";
import { TableTopPart } from "../tableTopPart/tableTopPart";

const UsersUI = () => {
  // const theadData:string[] = ["Name", "Email", "Created At", "Role", "Status", "Action"]

  return (
    <div className="user-container">
      <TableTopPart path="/dashboard/users/add" placeholder="Search for a User"/>
      <Table data={usersData} columns={
        [
          {
            thead: "Name",
            field: "userName",
            render: (item, obj) => {
              return (
                <div className="details">
                  {obj?.userImg && <Image
                    src={obj.userImg}
                    alt="image icon"
                    height={40}
                    width={40}
                    className="img"
                  ></Image>}
                  <span>{item}</span>
                </div>
              );
            },
          },
          {
            thead: "Email",
            field: "email",
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
            thead: "Role",
            field: "role",
            render: (item) => {
              return <span>{item}</span>;
            },
          },
          {
            thead: "Status",
            field: "status",
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
                  <Link href={`/dashboard/users/${obj?.id}`}>
                    <button className="view">{obj?.actions[0]}</button>
                  </Link>
                  <button className="delete">{obj?.actions[1]}</button>
                </div>
              );
            },
          },
        ]
      } />
    </div>
  );
};

export default UsersUI;
