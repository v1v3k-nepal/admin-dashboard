"use server";
import { addUser, updateUser } from "@/app/lib/actions";
import { fetchSingleUser } from "@/app/lib/fetchData";

export const addUserFunc = async (e: React.FormEvent<HTMLFormElement>) => {
  const status = await addUser(e);
  return status;
};

export const fetchSingleUserDataFunc = async (id: string) => {
  const data: Com.TuserData = await fetchSingleUser(id);
  return data;
};

export const UpdateUserFunc = async (id: string, data: Com.TuserFormData) => {
  const status = await updateUser(id, data);
  return status;
};
