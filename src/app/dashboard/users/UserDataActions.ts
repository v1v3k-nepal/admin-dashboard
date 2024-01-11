"use server";
import { addUser, updateUser } from "@/app/lib/actions";
import { fetchSingleUser } from "@/app/lib/fetchData";

export const addUserFunc = async (formData: Com.TuserFormData) => {
  const status = await addUser(formData);
  return status;
};

export const fetchSingleUserDataFunc = async (id: string) => {
  const data = (await fetchSingleUser(id)) as Com.TuserData;
  return data;
};

export const UpdateUserFunc = async (id: string, data: Com.TuserFormData, changePwd:boolean) => {
  const status = await updateUser(id, data, changePwd);
  return status;
};
