import React from "react";
import { ReactComponent as WavingHand } from "../assets/wavingHand.svg";
import { ReactComponent as ConcentricCircles } from "../assets/concentricCircles.svg";
import { ReactComponent as InvertedLogo } from "../assets/invertedLogo.svg";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="hidden w-[55%] bg-brand p-10 lg:flex flex-col justify-center relative h-screen overflow-clip">
        <p className="md:text-3xl 2xl:text-[64px] font-bold text-white md:leading-4 2xl:leading-[80px]">
          Hello,
          <WavingHand className="inline" />
          <br /> Welcome to Blippto!
        </p>
        <p className="leading-4 2xl:leaing-6 text-xs lg:text-sm 2xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
          Enhance the protection of your estate with our comprehensive security
          management services. Join us to experience a seamless integration of
          cutting-edge technology and expert personnel dedicated to ensuring the
          utmost safety of your property. Our commitment is unwavering, and we
          prioritize your security as our topmost concern. Invest in peace of
          mind as we tailor solutions to elevate the overall security
          infrastructure of your estate. Your safety is not just a priority;
          it's our unwavering commitment.
        </p>
        <p className="lg:text-sm 2xl:text-lg font-medium text-white absolute bottom-10">
          <span className="mr-8">Terms</span>
          <span>Privacy</span>
        </p>
        <ConcentricCircles className="absolute -right-5 translate-x-[50%] -translate-y-[35%] lg:scale-[0.6] xl:scale-75" />
        <ConcentricCircles className="absolute -translate-x-[50%] translate-y-[50%] lg:scale-[0.6] xl:scale-75" />
      </div>
      <div className="w-full lg:w-[45%] flex flex-col p-6 sm:p-10 items-center bg-background relative">
        <p className="self-start">
          <InvertedLogo className="scale-[0.7] lg:scale-75" />
        </p>
        <div className="w-full sm:w-[70%] 2xl:w-[522px] text-center mt-28">
          <p className="text-lg 2xl:text-2xl font-semibold mb-20">
            Do you want to register as an estate or a user?
          </p>
          <div className="flex justify-center gap-x-6">
            <button
              className="flex justify-center items-center h-16 w-40 lg:h-24 2xl:h-36 xl:w-[11.5rem] border-2 border-[#6484E6] text-md 2xl:text-xl font-medium rounded-2xl bg-white shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
              onClick={() => {
                navigate("/signup");
                window.sessionStorage.setItem("userType", "staff");
              }}
            >
              Estate
            </button>
            <button
              className="flex justify-center items-center h-16 w-40 lg:h-24 2xl:h-36 xl:w-[11.5rem] border-2 border-[#6484E6] text-md 2xl:text-xl font-medium rounded-2xl bg-white shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
              onClick={() => {
                navigate("/signup");
                window.sessionStorage.setItem("userType", "user");
              }}
            >
              User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
