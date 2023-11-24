import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async ({ searchParams }: Com.TsearchParams) => {
  const q = searchParams?.q || "";
  const itemsPerPage = searchParams?.itemsPerPage || 1;
  const currentPage = searchParams?.page || 1;

  const data: Com.TuserData | undefined = await fetchUsers(q, itemsPerPage, currentPage);

  return (
    <div>
      <UsersUI data={data} />
    </div>
  );
};

export default Users;
