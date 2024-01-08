import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async ({ searchParams }: Com.TsearchParams) => {
  const q = searchParams?.q || "";
  const itemsPerPage = Number(searchParams?.itemsPerPage || 1);
  const currentPage = Number(searchParams?.page || 1);

  const data = await fetchUsers(q, itemsPerPage, currentPage);
  const users = data?.users as Com.TuserData[];
  const userCount = data?.userCount as number;

  return (
    <div>
      <UsersUI usersData={users} userCount={userCount} />
    </div>
  );
};

export default Users;
