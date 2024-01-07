"use client";
import React from "react";
import Table from "../table/table";
import Image from "next/image";
import "./_users.scss";
import Link from "next/link";
import { TableTopPart } from "../tableTopPart/tableTopPart";

const UsersUI = ({ usersData, userCount }: { usersData?: Com.TuserData[] , userCount: number }) => {
  // const theadData:string[] = ["Name", "Email", "Created At", "Role", "Status", "Action"]


  return (
    <div className="user-container">
      <TableTopPart
        path="/dashboard/users/add"
        placeholder="Search for a User"
      />
      <Table
        data={!!usersData ? usersData : []}
        itemCount={userCount}
        columns={[
          {
            thead: "Name",
            field: "username",
            render: (item, obj) => {
              return (
                <div className="details">
                  {obj?.userImg && (
                    <Image
                      src={obj?.userImg}
                      alt="image icon"
                      height={40}
                      width={40}
                      className="img"
                    ></Image>
                  )}
                  <div className="user-name">{obj?.username}</div>
                </div>
              );
            },
          },
          {
            thead: "Email",
            field: "email",
            render: (item, obj) => {
              return <div className="email">{obj?.email}</div>;
            },
          },
          {
            thead: "Address",
            field: "address",
            render: (item, obj) => {
              return <span>{obj?.address}</span>;
            },
          },
          {
            thead: "Role",
            field: "isAdmin",
            render: (item) => {
              return <span>{item ? "Admin" : "Client"}</span>;
            },
          },
          {
            thead: "Status",
            field: "isActive",
            render: (item) => {
              return <span>{item ? "Active" : "InActive"}</span>;
            },
          },
          {
            thead: "Actions",
            field: "actions",
            render: (item, obj) => {
              return (
                <div className="btn-container">
                  <Link href={`/dashboard/users/${obj?._id}`}>
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

export default UsersUI;
