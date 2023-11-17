import React from "react";
import Card from "@/components/dashboard_ui/card/card";
import { cardsData } from "../lib/data";
import Rightbar from "@/components/dashboard_ui/rightbar/rightbar";
import Transactions from "@/components/dashboard_ui/transactions/transactions";
import Chart from "@/components/dashboard_ui/chart/chart";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="middle-content">
        <div className="cards-container">
          {cardsData.map((data)=>(
            <Card key={data.id} item={data}/>
          ))}
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
