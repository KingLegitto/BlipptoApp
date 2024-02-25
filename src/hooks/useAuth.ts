import { axiosAuth } from "../config/axios";
import { useMutation, useQuery } from "react-query";
import { UserData, FormData } from "../propTypes";

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

// export const useSignup = () => {
//   const mutation = useMutation((data: UserData) =>
//     axiosAuth().post("/api/auth/register", data)
//   );
//   return mutation;
// };

export const useRegisterEstate = () => {
  const mutation = useMutation((data: FormData) =>
    axiosAuth().post("/api/auth/register/estate", data)
  );
  return mutation;
};

export const useRegisterUser = () => {
  const mutation = useMutation((data: FormData) =>
    axiosAuth().post("/api/auth/register/user", data)
  );
  return mutation;
};

export const useVerifyUserEmail= (token:string) => {
  const mutation = useQuery("",() =>
    axiosAuth().get(`/api/users/verifyEmail?token=${token}`)
  );
  return mutation;
};

export const useSignUpWithGoogle = () => {
  return useQuery("signIn-google", () => axiosAuth().get("/api/auth/google"), {
    enabled: false,
  });
};

export const useSignUpWithFacebook = () => {
  return useQuery(
    "signIn-facebook",
    () => axiosAuth().get("/api/auth/facebook"),
    { enabled: false }
  );
};
