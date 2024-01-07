import { axiosAuth } from "../config/axios";
import { useMutation, useQuery } from "react-query";

type UserData = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const mutation = useMutation((data: UserData) => axiosAuth().post("/api/auth/login", data));
  return mutation;
};

export const useSignup = () => {
  const mutation = useMutation((data: UserData) =>
    axiosAuth().post("/api/auth/register", data)
  );
  return mutation;
};

export const useSignUpWithGoogle = () => {
  return useQuery("signIn-google", () =>
    axiosAuth().get("/api/auth/google")
  );
};

export const useSignUpWithFacebook = () => {
  return useQuery("signIn-facebook", () =>
    axiosAuth().get("/api/auth/facebook")
  );
};

export const useHandleSignUpWithGoogle = () => {
  return useSignUpWithGoogle
}


export const useHandleSignUpWithFacebook = () => {
  return useSignUpWithFacebook

}
