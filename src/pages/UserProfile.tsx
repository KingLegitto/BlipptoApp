import React, { useEffect } from "react";
import { useGetUserProfile } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const profileType = "user"
  window.localStorage.setItem("profileType", profileType)

  

  return <div></div>
};

export default UserProfile;
