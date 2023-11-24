import React from "react";
import UsersUI from "@/components/dashboard_ui/users/users";
import { fetchUsers } from "@/app/lib/fetchData";

type Props = {
  searchParams: {
    q: string,
    itemsPerPage: string;
    page: string;
  }
}

const Users = async ({searchParams}:Props) => {
  const q = searchParams?.q || "";
  const itemsPerPage = searchParams?.itemsPerPage || 1;
  const currentPage = searchParams?.page || 1;
  const data: any = await fetchUsers(q, itemsPerPage, currentPage);
  console.log("i am users", itemsPerPage);
  return (
    <div>
      <UsersUI data={data} />
    </div>
  );
};

export default Users;
