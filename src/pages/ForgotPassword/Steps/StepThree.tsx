import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/pointLeft.svg";
import { ReactComponent as Lock } from "../../../assets/lock.svg";
import { ForgotPasswordPageProps } from "../../../propTypes";
import { ReactComponent as VisibilityOff } from "../../../assets/visibilityOff.svg";
import VisibleIcon from "../../../components/icons/visibilityIcon";

const StepThree: React.FC<ForgotPasswordPageProps> = ({ setCurrentStep }) => {
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState<{
    first: boolean;
    confirmFirst: boolean;
  }>({
    first: false,
    confirmFirst: false,
  });

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetInput = e.target as HTMLInputElement;
    setConfirmPassword(targetInput?.value);
    if (targetInput?.value !== password) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  const handleGoToNextStep = () => {
    if (!isError && confirmPassword && password) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (!password && !confirmPassword) {
      setIsError(true);
      setInvalidPassword(true);
    } else if (!confirmPassword) {
      setIsError(true);
      setInvalidPassword(true);
    } else if (!password) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const typedLength = confirmPassword.length >= 1;
    const addOutline = typedLength && invalidPassword;
    if (addOutline) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    return () => {};
  }, [confirmPassword, confirmPassword.length, invalidPassword]);

  return (
    <div className="w-full sm:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6 bg-white shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[65vh] p-4 sm:p-8 rounded-2xl lg:bg-background lg:shadow-none lg:min-h-auto lg:p-0 lg:rounded-none">
      <p className="font-semibold text-lg xl:text-[26px] text-center mb-2 2xl:mb-5 xl:leading-6">
        Set new password
      </p>
      <div className="relative w-full h-12 2xl:h-16">
        <div className="pointer-events-none absolute inset-y-0 left-3 xl:left-5 flex items-center pl-2 md:pl-3">
          <span className="text-gray-500 sm:text-sm">
            <Lock className="scale-[0.7] lg:scale-75" />
          </span>
        </div>
        <input
          type={!showPassword.first ? "password" : "text"}
          required
          name="password"
          id="password"
          className={`${
            isError && !password
              ? "border-2 border-red-500 focus:border-red-500"
              : "focus:border-yellow-300 focus:border-2 "
          } block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 text-gray-900 outline-none text-sm sm:leading-6 `}
          placeholder="New Password"
          onChange={(e) => {
            setPassword(e.target.value);
            if (isError) {
              setIsError(false);
            }
          }}
        />
        <div className="absolute inset-y-0 right-0 px-2 2xl:px-4 flex items-center justify-center rounded-r-[2rem] cursor-pointer">
          <span
            className="sm:text-sm"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                first: !prevState.first,
              }))
            }
          >
            {showPassword?.first ? (
              <VisibleIcon className="scale-[0.8] lg:scale-75 !w-[28px] !h-[28px]" />
            ) : (
              <VisibilityOff className="scale-[0.7] lg:scale-75" />
            )}
          </span>
        </div>
      </div>
      <div className="relative w-full h-12 2xl:h-16">
        <div className="pointer-events-none absolute inset-y-0 left-3 xl:left-5 flex items-center pl-2 md:pl-3">
          <span className="text-gray-500 sm:text-sm">
            <Lock className="scale-[0.7] lg:scale-75" />
          </span>
        </div>
        <input
          type={!showPassword.confirmFirst ? "password" : "text"}
          required
          name="password"
          id="password"
          className={`${
            isError && invalidPassword
              ? "border-2 border-red-500 focus:border-red-500"
              : "focus:border-yellow-300 focus:border-2 "
          } block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 text-gray-900 outline-none text-sm sm:leading-6 `}
          placeholder="Confirm Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleConfirmPassword(e)
          }
        />
        <div className="absolute inset-y-0 right-0 px-2 2xl:px-4 flex items-center justify-center rounded-r-[2rem] cursor-pointer">
          <span
            className="sm:text-sm"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                confirmFirst: !prevState.confirmFirst,
              }))
            }
          >
            {showPassword?.confirmFirst ? (
              <VisibleIcon className="scale-[0.8] lg:scale-75" />
            ) : (
              <VisibilityOff className="scale-[0.7] lg:scale-75" />
            )}
          </span>
        </div>
      </div>
      <button
        onClick={handleGoToNextStep}
        className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-12 2xl:h-16 w-full font-semibold"
      >
        Reset Password
      </button>
      <button className="flex gap-1 relative z-10 justify-center items-center rounded-full text-base bg-transparent h-12 2xl:h-16 w-full font-semibold forgot-password-transparent-btn">
        <ArrowLeft className="scale-[0.6] xl:scale-75" /> Back To Log In
      </button>
    </div>
  );
};

export default StepThree;
