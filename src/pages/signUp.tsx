import React, { useRef, useState } from "react";
import { ReactComponent as WavingHand } from "../assets/wavingHand.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as GoogleLogo } from "../assets/google.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as EmailLogo } from "../assets/sendMail.svg";
import { ReactComponent as ConcentricCircles } from "../assets/concentricCircles.svg";
import { ReactComponent as InvertedLogo } from "../assets/invertedLogo.svg";
import { ReactComponent as VisibilityOff } from "../assets/visibilityOff.svg";
import VisibleIcon from "../components/icons/visibilityIcon";
import { BLIPPTO_PAGES } from "../utils/navigationRoutes";
import { Link, useLocation } from "react-router-dom";
import {
  useSignup,
  useSignUpWithFacebook,
  useSignUpWithGoogle,
} from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../components/Loader/Loader";
import { validateEmail } from "../utils/helpersForOnboarding";

const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: signUp } = useSignup();
  const { data: googleData, refetch: googleRefetch } = useSignUpWithGoogle();
  const { data: facebookData, refetch: facebookRefetch } =
    useSignUpWithFacebook();

  const handleFacebookAuthentication = () => {
    facebookRefetch();
    const { token } = facebookData?.data?.data;
    if (facebookData?.data.status !== 200) {
    }
    window.localStorage.setItem("Tkn", `${token}`);
    navigate(`/${location.state.type}/register`);
  };

  const handleGoogleAuthentication = () => {
    googleRefetch();
    const { token } = googleData?.data?.data;
    if (googleData?.data.status !== 200) {
    }
    window.localStorage.setItem("Tkn", `${token}`);
    navigate(`/${location.state.type}/register`);
  };

  const handleSubmit = () => {
    if (
      !validateEmail(emailRef.current!.value.trim()) ||
      passwordRef.current!.value.trim() === ""
    ) {
      setIsError(true);
      return;
    }

    setLoading(true);
    const data = {
      email: emailRef.current!.value.trim(),
      password: passwordRef.current!.value.trim(),
    };

    if (process.env.REACT_APP_ENV === "local") {
      const userType = window.sessionStorage.getItem("userType") || "user";
      navigate(`/${userType}/register`);
      return;
    }

    signUp(data, {
      onSuccess: (data) => {
        setLoading(false);
        window.localStorage.setItem("Tkn", `${data.data.token}`);
        const userType = window.sessionStorage.getItem("userType") || "user";
        navigate(`/${userType}/register`);
      },
      onError: (error: any) => {
        setLoading(false);
        Swal.fire("error", error.response.data.message, "error");
      },
    });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="flex">
        <div className="hidden lg:flex w-[55%] bg-brand p-10 flex-col justify-center relative h-screen overflow-clip">
          <p className="md:text-3xl 2xl:text-[64px] font-bold text-white md:leading-4 2xl:leading-[80px]">
            Hello,
            <WavingHand className="inline" />
            <br /> Welcome to Blippto!
          </p>
          <p className="leading-4 2xl:leaing-6 text-xs lg:text-sm 2xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
            Enhance the protection of your estate with our comprehensive
            security management services. Join us to experience a seamless
            integration of cutting-edge technology and expert personnel
            dedicated to ensuring the utmost safety of your property. Our
            commitment is unwavering, and we prioritize your security as our
            topmost concern. Invest in peace of mind as we tailor solutions to
            elevate the overall security infrastructure of your estate. Your
            safety is not just a priority; it's our unwavering commitment.
          </p>
          <p className="lg:text-sm 2xl:text-xl font-medium text-white absolute bottom-10">
            <span className="relative z-10 mr-8">Terms</span>
            <span className="relative z-10">Privacy</span>
          </p>
          <ConcentricCircles className="absolute -right-5 translate-x-[50%] -translate-y-[35%] lg:scale-[0.6] xl:scale-75" />
          <ConcentricCircles className="absolute -translate-x-[50%] translate-y-[50%] lg:scale-[0.6] xl:scale-75" />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col items-center bg-background relative p-7 sm:p-10 h-screen">
          <p className="self-start">
            <InvertedLogo className="scale-[0.7] lg:scale-75" />
          </p>
          <div className="w-full sm:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6 signUpContainer mt-20 lg:mt-0 lg:scale-[0.8] 2xl:scale-100 2xl:mt-20">
            <div>
              <p className="font-semibold text-[2rem] 2xl:text-5xl text-center mb-2 2xl:mb-5">
                Let's get started
              </p>
              <p className="text-sm 2xl:text-lg text-center text-[#00000099]">
                Already have an account?{" "}
                <Link to="/signin" className="text-black">
                  Login
                </Link>
              </p>
            </div>
            <button
              className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
              onClick={() => handleGoogleAuthentication()}
            >
              <div className="flex items-center">
                <GoogleLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
                <p className="text-sm font-medium">Sign up with Google</p>
              </div>
            </button>
            <button
              className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
              onClick={() => handleFacebookAuthentication()}
            >
              <div className="flex items-center">
                <FacebookLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
                <p className="text-sm font-medium">Sign up with Facebook</p>
              </div>
            </button>
            <div className="h-10 2xl:h-12 flex relative items-center">
              <hr className="border-black w-full h-[0.05rem]" />
              <div className="absolute h-10 2xl:h-12 w-16 z-10 bg-background flex justify-center items-center left-[50%] -translate-x-[50%]">
                or
              </div>
            </div>
            <div className="relative w-full h-12 2xl:h-16">
              <div className="pointer-events-none absolute inset-y-0 left-3 xl:left-5 flex items-center pl-2 md:pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <EmailLogo className="scale-[0.7] lg:scale-75" />
                </span>
              </div>
              <input
                ref={emailRef}
                type="email"
                required
                name="email"
                id="email"
                className={`block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 ${
                  isError && !validateEmail(emailRef.current!.value.trim())
                    ? "border-2 border-red-500 focus:border-red-500"
                    : ""
                } text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-sm sm:leading-6`}
                placeholder="Email"
                onChange={() => (isError ? setIsError(false) : "")}
              />
            </div>
            <div className="relative w-full h-12 2xl:h-16">
              <div className="pointer-events-none absolute inset-y-0 left-3 xl:left-5 flex items-center pl-2 md:pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <Lock className="scale-[0.7] lg:scale-75" />
                </span>
              </div>
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                required
                name="password"
                id="password"
                className={`block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 ${
                  isError && passwordRef.current!.value.trim() === ""
                    ? "border-2 border-red-500 focus:border-red-500"
                    : ""
                } text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-sm sm:leading-6`}
                placeholder="Password"
                onChange={() => (isError ? setIsError(false) : "")}
              />
              <div className="absolute inset-y-0 right-0 px-2 2xl:px-4 flex items-center justify-center rounded-r-[2rem] cursor-pointer">
                <span
                  className="sm:text-sm"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? (
                    <VisibleIcon />
                  ) : (
                    <VisibilityOff className="scale-[0.7] lg:scale-75" />
                  )}
                </span>
              </div>
            </div>
            <p className="ml-7 xl:ml-8">
              <input type="checkbox" className="mr-4" /> remember me
            </p>
            <button
              onClick={() => handleSubmit()}
              className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-12 2xl:h-16 w-full font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
