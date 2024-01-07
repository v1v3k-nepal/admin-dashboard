"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./_singleUserPage.scss";
import { usePathname } from "next/navigation";
import { UpdateUserFunc, fetchSingleUserDataFunc } from "../UserDataActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleUserPage = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState<Com.TuserFormData>();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formData &&
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value == "true" ? true : false,
      }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData &&
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
  };

  const handleSubmit = async () => {
    const id = pathname.split("/").at(3) as string;
    const status = formData && (await UpdateUserFunc(id, formData));
    status
      ? toast.success("User Data Updated Successfully")
      : toast.error("Could not Update User Data");
  };

  useEffect(() => {
    (async () => {
      const id = pathname.split("/").at(3) as string;
      const data: Com.TuserData = await fetchSingleUserDataFunc(id);

      const initialFormData = {
        username: data?.username ? data?.username : "",
        email: data?.email ? data?.email : "",
        password: data?.username ? data?.username : "",
        phone: data?.phone ? data?.phone : "",
        isAdmin: data?.isAdmin ? data?.isAdmin : false,
        isActive: data?.isActive ? data?.isActive : true,
        address: data?.address ? data?.address : "",
        userImg: data?.userImg ? data?.userImg : "",
      };
      setFormData(initialFormData as Com.TuserFormData);
    })();
  }, [pathname]);
  console.log(formData, "initial form data");
  return (
    <div className="single-user-page">
      <div className="dp-name-container">
        {
          <div className="dp-container">
            <Image
              src={formData?.userImg ? formData?.userImg : "/user-icon.jpg"}
              alt="user dp"
              fill
              className="dp"
            />
          </div>
        }
        <span className="user-name">{formData?.username}</span>
      </div>
      <form action={handleSubmit}>
        <ToastContainer />
        <div className="input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData?.username}
          />
        </div>
        <div className="input">
          <label htmlFor="userImg">User Image</label>
          <input
            type="text"
            id="userImg"
            placeholder="User Image"
            name="userImg"
            onChange={handleChange}
            value={formData?.userImg}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData?.email}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData?.password}
          />
        </div>
        <div className="input">
          <label htmlFor="Phone">Phone</label>
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={formData?.phone}
          />
        </div>
        <div className="input">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={formData?.address}
          />
        </div>
        <div className="input">
          <label htmlFor="isAdmin">Is Admin ?</label>
          <select name="isAdmin" id="isAdmin" onChange={handleSelectChange}>
            <option value="false" selected={!formData?.isAdmin}>
              No
            </option>
            <option value="true" selected={!!formData?.isAdmin}>
              Yes
            </option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="isActive">Is Active ?</label>
          <select name="isActive" id="isActive" onChange={handleSelectChange}>
            <option value="true" selected={!!formData?.isActive}>
              Yes
            </option>
            <option value="false" selected={!formData?.isActive}>
              No
            </option>
          </select>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
