import Card from "@/components/dashboard_ui/card/card";
import React from "react";
import "./_dashboard.scss";
import Rightbar from "@/components/dashboard_ui/rightbar/rightbar";
import Transactions from "@/components/dashboard_ui/transactions/transactions";
import Chart from "@/components/dashboard_ui/chart/chart";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="dashboard-container">
      <div className="middle-content">
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className="right-bar">
        <Rightbar/>
      </div>
    </div>
  );
};

export default Dashboard;
