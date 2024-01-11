"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./_singleUserPage.scss";
import { usePathname } from "next/navigation";
import { UpdateUserFunc, fetchSingleUserDataFunc } from "../UserDataActions";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleUserPage = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState<Com.TuserFormData>();
  const [changePwdStatus, setChangePwdStatus] = useState(false);
  const [data, setData] = useState<Com.TuserFormData>();

  const handlePwdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value == "true"
      ? setChangePwdStatus(true)
      : setChangePwdStatus(false);
  };

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
    if (formData?.email !== "testuser@gmail.com") {
      const id = pathname.split("/").at(3) as string;
      const status =
        formData && (await UpdateUserFunc(id, formData, changePwdStatus));
      setTimeout(() => {
        status
          ? toast.success("User Data Updated Successfully")
          : toast.error("Could not Update User Data");
      }, 500);
    } else {
      toast.error("Modifying this particular user is restricted by developer");
    }
  };

  useEffect(() => {
    (async () => {
      const id = pathname.split("/").at(3) as string;
      const data: Com.TuserData = await fetchSingleUserDataFunc(id);
      setTimeout(() => {
        setData(data);
      }, 2000);

      const initialFormData = {
        username: data?.username ? data?.username : "",
        email: data?.email ? data?.email : "",
        password: data?.username ? data?.password : "",
        phone: data?.phone ? data?.phone : "",
        isAdmin: data?.isAdmin,
        isActive: data?.isActive,
        address: data?.address ? data?.address : "",
        userImg: data?.userImg ? data?.userImg : "",
      };
      setFormData(initialFormData as Com.TuserFormData);
    })();
  }, [pathname]);
  console.log(formData, "initial form data");

  const skeletonStyle = {
    marginTop: "10px",
    borderRadius: "8px",
    height: "50px",
  };
  return (
    <div className="single-user-page">
      <div className="dp-name-container">
        <div className="dp-container">
          {data ? (
            <Image
              src={
                formData?.userImg
                  ? (formData?.userImg as string)
                  : "/user-icon.jpg"
              }
              alt="user dp"
              fill
              className="dp"
            />
          ) : (
            <Skeleton style={{ height: "100%", borderRadius: "10px" }} />
          )}
        </div>
        {data ? (
          <span className="user-name">{formData?.username}</span>
        ) : (
          <Skeleton style={{ height: "35px", width: "100%" }} />
        )}
      </div>
      <form action={handleSubmit}>
        <div className="input">
          <label htmlFor="username">Username</label>
          {data ? (
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData?.username}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="userImg">User Image</label>
          {data ? (
            <input
              type="text"
              id="userImg"
              placeholder="User Image"
              name="userImg"
              onChange={handleChange}
              value={formData?.userImg}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          {data ? (
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData?.email}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="changePwd">Change Password ?</label>
          {data ? (
            <select
              name="changePwd"
              id="changePwd"
              defaultValue={"false"}
              onChange={handlePwdChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        {changePwdStatus && (
          <div className="input">
            <label htmlFor="password">Password</label>
            {data ? (
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData?.password}
                required
              />
            ) : (
              <Skeleton style={skeletonStyle} />
            )}
          </div>
        )}
        <div className="input">
          <label htmlFor="Phone">Phone</label>
          {data ? (
            <input
              type="phone"
              id="phone"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData?.phone}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="address">Address</label>
          {data ? (
            <input
              type="text"
              id="address"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={formData?.address}
              required
            />
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="isAdmin">Is Admin ?</label>
          {data ? (
            <select
              name="isAdmin"
              id="isAdmin"
              onChange={handleSelectChange}
              required
              // defaultValue={formData?.isAdmin ? "true" : "false"}
            >
              <option value="false" selected={!formData?.isAdmin}>
                No
              </option>
              <option value="true" selected={!!formData?.isAdmin}>
                Yes
              </option>
            </select>
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <div className="input">
          <label htmlFor="isActive">Is Active ?</label>
          {data ? (
            <select
              name="isActive"
              id="isActive"
              onChange={handleSelectChange}
              // defaultValue={formData?.isActive ? "true" : "false"}
              required
            >
              <option value="true" selected={!!formData?.isActive}>
                Yes
              </option>
              <option value="false" selected={!formData?.isActive}>
                No
              </option>
            </select>
          ) : (
            <Skeleton style={skeletonStyle} />
          )}
        </div>
        <button className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
