import React from "react";
import Table from "../table/table";
import { usersData } from "@/app/lib/data";

const UsersUI = () => {
  const theadData:string[] = ["Name", "Email", "Created At", "Role", "Status", "Action"]
  return (
    <div>
      <Table theadData={theadData} tbodyData={usersData}/>
  </div>
  )
}

export default UsersUI