import React from "react";

const StepFour: React.FC = () => {
  return (
    <div className="w-full sm:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6  bg-white shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[65vh] p-4 sm:p-8 rounded-2xl lg:bg-background lg:shadow-none lg:min-h-auto lg:p-0 lg:rounded-none">
      <p className="font-semibold text-lg xl:text-[26px] text-center mb-2 2xl:mb-5 xl:leading-6">
        Password Reset Successful!
      </p>
      <p className="text-base xl:text-xl text-center xl:leading-6">
        Your password has been successfully reset. You can now log in to your
        account using your new password.
      </p>
      <button className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-12 2xl:h-16 w-full font-semibold mb-8">
        Log In
      </button>
    </div>
  );
};

export default StepFour;
