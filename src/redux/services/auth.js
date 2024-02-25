import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("Tkn");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (client) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { client: client },
      }),
    }),
    signup: builder.query({
      query: (client) => ({
        url: "/api/auth/register",
        method: "POST",
        body: { client: client },
      }),
    }),
    registerEstate: builder.query({
      query: (client) => ({
        url: "/api/auth/register/estate",
        method: "POST",
        body: { client: client },
      }),
    }),
    updateUser: builder.query({
      query: (client) => ({
        url: "/api/auth/register/user",
        method: "PATCH",
        body: { client: client },
      }),
    }),
    verifyUserEmail: builder.query({
      query: () => ({
        url: `/api/users/verifyEmail`,
        method: "GET",
      }),
    }),
    verifyPhone: builder.query({
      query: () => ({
        url: `/api/users/verifyEmail`,
        method: "GET",
      }),
    }),
    signUpWithGoogle: builder.query({
      query: (client) => ({
        url: "/api/auth/google",
        method: "POST",
        body: { client: client },
      }),
    }),
    forgotPassword: builder.query({
      query: (client) => ({
        url: "/api/auth/google",
        method: "POST",
        body: { client: client },
      }),
    }),
    resetPassword: builder.query({
      query: (client) => ({
        url: "/api/auth/google",
        method: "POST",
        body: { client: client },
      }),
    }),
  }),
});

export const {
  useLazyLoginQuery,
  useLazyForgotPasswordQuery,
  useLazySignUpWithGoogleQuery,
} = authApi;
