import React from "react";
import Image from "next/image";
import { TtransactionData } from "@/types/types";
import "./_transactions.scss";

const Transactions = (props: { transactionData: TtransactionData }) => {
  const { transactionData } = props;
  return (
    <div className="transactions-container">
      <h1 className="title">Latest Transactions</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="name-img">
                  <Image src={item.userImg} alt="user image" width={40} height={40} className="img"/>
                  <span>{item.userName}</span>
                </div>
              </td>
              <td><span className={`${item.status} status`}>{item.status}</span></td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
