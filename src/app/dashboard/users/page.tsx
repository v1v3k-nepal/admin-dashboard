import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async() => {
  const data: any = await fetchUsers();
  console.log("i am users", data)
  return (
    <div>
      <UsersUI data={data}/>
    </div>
  );
};

export default Users;
