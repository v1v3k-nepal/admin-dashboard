import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async ({searchParams}:{searchParams: {q: string}}) => {
  const q = searchParams?.q || "";
  const data: any = await fetchUsers(q);
  console.log("i am users", data);
  return (
    <div>
      <UsersUI data={data} />
    </div>
  );
};

export default Users;
