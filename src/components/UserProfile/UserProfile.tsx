import React, { useEffect } from 'react';
import { useGetUserProfile } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const UserProfile:React.FC = () => {
  const { data: userProfileData, isLoading, isError, error } = useGetUserProfile();
  const navigate = useNavigate();

  useEffect(() => {
    const statusCode = (error as any)?.response?.status;

    if (isError && statusCode === 403) {
      navigate("/user/register");
    }

    const userProfile = (userProfileData as any)?.data?.data; 

    if (userProfile?.profile?.type === "staff") {
      navigate("/dashboard/home");
    }
  }, [error, isError, navigate, userProfileData]);

  return (
    <>
      {isLoading ? <p>Loading....</p> : <div></div>}
    </>
  );
};

export default UserProfile;
