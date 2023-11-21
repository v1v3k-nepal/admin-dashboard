import React from "react";
import Image from "next/image";
import "./_singleUserPage.scss";

const SingleUserPage = () => {
  return (
    <div className="single-user-page">
      <div className="dp-name-container">
        <div className="dp-container">
          <Image src="/astronaut.png" alt="user dp" fill className="dp" />
        </div>
        <span className="user-name">Chinnu Swami</span>
      </div>
      <form action="">
        <div className="input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="input">
          <label htmlFor="Phone">Phone</label>
          <input type="phone" id="phone" placeholder="Phone" />
        </div>
        <div className="input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Address" />
        </div>
        <div className="input">
          <label htmlFor="isAdmin">Is Admin ?</label>
          <select name="isAdmin" id="isAdmin">
          <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="input">
        <label htmlFor="isActive">Is Active ?</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
