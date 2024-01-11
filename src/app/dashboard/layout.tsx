"use client";
import Navbar from "@/components/dashboard_ui/navbar/navbar";
import Sidebar from "@/components/dashboard_ui/sidebar/sidebar";
import React, { useEffect } from "react";
import "./_dashboard.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated") router.push("/login");
    console.log(status, "/dashboard page");
  }, [status]);

  if (status == "loading") {
    return <div>Loading</div>;
  } else if (status == "authenticated")
    return (
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Navbar />
          {props.children}
        </div>
      </div>
    );
};

export default Layout;
