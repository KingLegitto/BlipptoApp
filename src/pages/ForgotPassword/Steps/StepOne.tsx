import React, { useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/pointLeft.svg";
import { ReactComponent as EmailLogo } from "../../../assets/sendMail.svg";
import { ForgotPasswordPageProps } from "../../../propTypes";
import { validateEmail } from "../../../utils/helpersForOnboarding";

const StepOne: React.FC<ForgotPasswordPageProps> = ({ setCurrentStep }) => {
  const [isError, setIsError] = useState<Boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (!validateEmail(emailRef.current!.value.trim())) {
      setIsError(true);
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="w-full sm:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6 bg-white shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[65vh] p-4 sm:p-8 rounded-2xl lg:bg-background lg:shadow-none lg:min-h-auto lg:p-0 lg:rounded-none">
      <div className="">
        <p className="font-semibold text-lg xl:text-[26px] text-center mb-2 2xl:mb-5 xl:leading-6">
          Forgot Your Password?
        </p>
        <p className="text-base xl:text-xl text-center xl:leading-6">
          No worries, we’ll send you reset instructions.
        </p>
      </div>
      <div className="relative w-full h-12 2xl:h-16">
        <div className="pointer-events-none absolute inset-y-0 left-3 xl:left-5 flex items-center pl-2 md:pl-3">
          <span className="text-gray-500 sm:text-sm">
            <EmailLogo className="scale-[0.7] lg:scale-75" />
          </span>
        </div>
        <input
          type="email"
          required
          name="email"
          id="email"
          className={`block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-sm sm:leading-6 ${
            isError && !validateEmail(emailRef.current!.value.trim())
              ? "border-2 border-red-500 focus:border-red-500"
              : ""
          } `}
          placeholder="Email"
          ref={emailRef}
          onChange={() => (isError ? setIsError(false) : "")}
        />
      </div>

      <button
        onClick={handleSubmit}
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

export default StepOne;
