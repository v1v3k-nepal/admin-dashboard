"use server";
import React from "react";
import { addUser } from "../../../lib/actions";
import "./_addUser.scss";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { addUserFunc } from "../UserDataActions";

const AddUser = () => {
  return (
    <form action={addUser}>
      <div className="add-user-container">
        <div className="cols">
          <div className="col-left">
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <select name="isAdmin" id="isAdmin">
              <option hidden={true}>Is Admin ?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="col-right">
            <input type="email" placeholder="Email" name="email" />
            <input type="phone" name="phone" id="phone" placeholder="Phone" />
            <select name="isActive" id="isActive">
              <option hidden={true}>Is Active ?</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          className="userImg"
          name="userImg"
          placeholder="User Image URL"
        />
        <textarea
          id="textarea"
          cols={30}
          rows={10}
          placeholder="Address"
          name="address"
        ></textarea>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddUser;
