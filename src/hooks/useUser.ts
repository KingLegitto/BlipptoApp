import { axiosAuth } from "../config/axios";
import { useQuery } from "react-query";


export const useGetUserProfile = () => {
  const query = useQuery("profileData", () => axiosAuth().post("/api/user/profile"));
  return query;
};