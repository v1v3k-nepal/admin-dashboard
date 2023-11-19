import React from "react";
import { MdSearch } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { usersData } from "@/app/lib/data";
import "./_users.scss"

const UsersUI = () => {
  return (
    <div className="users-container">
    <div className="top">
      <div className="search">
        <MdSearch />
        <input type="text" placeholder="Search for a user" />
      </div>
      <Link href="/dashboard/users/add">
        <button>Add New</button>
      </Link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="user-details">
                <Image
                  src={item.userImg || "/noavatar.png"}
                  alt="user image"
                  height={40}
                  width={40}
                  className="user-img"
                ></Image>
                <span>John Doe</span>
              </div>
            </td>
            <td>{item.email}</td>
            <td>{item.CreatedAt}</td>
            <td>{item.role}</td>
            <td>{item.action}</td>
            <td>
              <div className="btn-container">
                <Link href={`/dashboard/users/${item.id}`}>
                  <button className="view">View</button>
                </Link>
                <button className="delete">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination-btns">
      <button>Prev</button>
      <button>Next</button>
    </div>
  </div>
  )
}

export default UsersUI