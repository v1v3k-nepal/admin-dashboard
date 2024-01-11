"use client";
import React, { useEffect } from "react";
import Card from "@/components/dashboard_ui/card/card";
import { cardsData, transactionData } from "../lib/data";
import Rightbar from "@/components/dashboard_ui/rightbar/rightbar";
import Transactions from "@/components/dashboard_ui/transactions/transactions";
import Chart from "@/components/dashboard_ui/chart/chart";
import "./_dashboard.scss";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const Dashboard = () => {
  // const router = useRouter();
  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (status !== "authenticated") router.push("/login");
  //   console.log(status, "/dashboard page");
  // }, [status]);

  // if (status == "loading") {
  //   return <div>Loading</div>;
  // } else
    return (
      <div className="dashboard-container">
        <div className="middle-content">
          <div className="cards-container">
            {cardsData.map((data) => (
              <Card key={data.id} item={data} />
            ))}
          </div>
          <Chart />
          <Transactions transactionData={transactionData} />
        </div>
        <div className="right-bar">
          <Rightbar />
        </div>
      </div>
    );
};

export default Dashboard;
