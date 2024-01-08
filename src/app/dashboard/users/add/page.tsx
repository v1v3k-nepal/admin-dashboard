"use client";
import React, { useState } from "react";
// import { addUser } from "../../../lib/actions";
import { addUserFunc } from "../UserDataActions";
import "./_addUser.scss";
import { toast } from "react-toastify";

const AddUser = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    isActive: true,
    address: "",
    userImg: "",
  };

  const [formData, setFormData] = useState<Com.TuserFormData>(initialFormData);
  // const [isActive, setIsActive] = useState<boolean>();
  // const [isAdmin, setIsAdmin] = useState<boolean>();
  // console.log(isAdmin, "isAdmin");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formData &&
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value == "true" ? true : false,
      }));
    // e.target.name == "isAdmin" &&
    //   setIsAdmin(e.target.value == "true" ? true : false);
    // e.target.name == "isActive" &&
    //   setIsActive(e.target.value == "true" ? true : false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "i am formdata inside handlesubmit");
    const status = await addUserFunc(formData);
    setTimeout(() => {
      status
        ? toast.success("Product Added to Database Successfully")
        : toast.error("Could not Add Product");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-user-container">
        <div className="cols">
          <div className="col-left">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={formData?.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={formData?.password}
              onChange={handleChange}
            />
            <select
              name="isAdmin"
              id="isAdmin"
              required
              defaultValue={"isAdmin"}
              onChange={handleSelectChange}
            >
              <option hidden={false} value={"isAdmin"}>
                Is Admin ?
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="col-right">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
            />
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone"
              required
              value={formData?.phone}
              onChange={handleChange}
            />
            <select
              name="isActive"
              id="isActive"
              defaultValue={"isActive"}
              required
              onChange={handleSelectChange}
            >
              <option hidden={false} value={"isActive"}>
                Is Active ?
              </option>
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
          required
          value={formData?.userImg}
          onChange={handleChange}
        />
        <textarea
          id="textarea"
          cols={30}
          rows={10}
          placeholder="Address"
          name="address"
          required
          value={formData?.address}
          onChange={handleChange}
        ></textarea>
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  );
};

export default AddUser;
