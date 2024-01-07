import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async ({ searchParams }: Com.TsearchParams) => {
  const q = searchParams?.q || "";
  const itemsPerPage = searchParams?.itemsPerPage || 1;
  const currentPage = searchParams?.page || 1;


  const data = await fetchUsers(q, itemsPerPage, currentPage);
  const users: Com.TuserData[] | undefined = data?.users;
  const userCount: number = data?.userCount;

  return (
    <div>
      <UsersUI usersData={users} userCount={userCount}/>
    </div>
  );
};

export default Users;
