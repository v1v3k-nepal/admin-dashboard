"use client";
import React, { useEffect, useState } from "react";
import "./_loginForm.scss";
// import { authenticate } from "@/app/lib/actions";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const initialFormData: Com.IloginFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<Com.IloginFormData>(initialFormData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loginMessage, setLoginMessage] = useState<string>();

  useEffect(() => {
    setError(params.get("error") ?? "");
    setSuccess(params.get("success") ?? "");
    console.log(status, session, "login form");
    if (status === "authenticated") router?.push("/dashboard");
    error &&
      setTimeout(() => {
        router.push("/login");
      }, 4000);
  }, [params, status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = { email: formData.email, password: formData.password };
    setLoginMessage("Signing In , Please wait a bit");
    await signIn("credentials", credentials);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-fields">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && <span className="error">{error} </span>}
        {loginMessage && <span className="signin-message">{loginMessage}</span>}
      </form>
      <div className="test-credentials">
        <h2 className="title">Test Credentials</h2>
        <p className="email">Email: testuser@gmail.com</p>
        <p className="password">Password: testuser</p>
      </div>
    </div>
  );
};

export default LoginForm;
