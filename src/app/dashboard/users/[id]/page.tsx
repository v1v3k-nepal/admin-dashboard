import React from "react";
import Image from "next/image";
import "./_singleUserPage.scss";
import { fetchSingleUser } from "@/app/lib/fetchData";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const userData = await fetchSingleUser(id);
  return (
    <div className="single-user-page">
      <div className="dp-name-container">
        <div className="dp-container">
          <Image src={userData?.userImg} alt="user dp" fill className="dp" />
        </div>
        <span className="user-name">Chinnu Swami</span>
      </div>
      <form action="">
        <div className="input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" value={userData?.username}/>
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" value={userData?.email}/>
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" value={userData?.password}/>
        </div>
        <div className="input">
          <label htmlFor="Phone">Phone</label>
          <input type="phone" id="phone" placeholder="Phone" value={userData?.phone}/>
        </div>
        <div className="input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Address" value={userData?.address}/>
        </div>
        <div className="input">
          <label htmlFor="isAdmin">Is Admin ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="false" selected={userData?.isAdmin}>No</option>
            <option value="true" selected={userData?.isAdmin}>Yes</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="isActive">Is Active ?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={userData?.isActive}>Yes</option>
            <option value="false" selected={userData?.isActive}>No</option>
          </select>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
