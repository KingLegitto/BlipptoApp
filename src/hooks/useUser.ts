import { axiosAuth } from "../config/axios";
import { useMutation, useQuery } from "react-query";



export const useGetUserProfile = () => {
  const query = useQuery("profileData", () => axiosAuth().post("/api/user/profile"));
  return query;
};