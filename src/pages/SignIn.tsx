import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as FacebookLogo } from "../assets/facebook.svg";
import { ReactComponent as GoogleLogo } from "../assets/google.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as EmailLogo } from "../assets/sendMail.svg";
import { ReactComponent as InvertedLogo } from "../assets/invertedLogo.svg";
import { ReactComponent as VisibilityOff } from "../assets/visibilityOff.svg";
import VisibleIcon from "../components/icons/visibilityIcon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BLIPPTO_LOCAL_STORAGE_USER_EMAIL,
  validateEmail,
} from "../utils/helpersForOnboarding";
import Loader from "../components/Loader/Loader";
import { BLIPPTO_PAGES } from "../utils/navigationRoutes";
import {
  useLazyLoginQuery,
  useLazySignUpWithGoogleQuery,
} from "../redux/services/auth";
import Swal from "sweetalert2";

const SignIn: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem(
    BLIPPTO_LOCAL_STORAGE_USER_EMAIL || ""
  );

  const [
    doLogin,
    {
      data,
      isSuccess: loginSuccessful,
      isFetching: loading,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLazyLoginQuery();

  const [
    signUpWIthGoogle,
    {
      data: googleData,
      isSuccess: googleLoginSuccessful,
      isFetching,
      isError: isGoogleQueryError,
      error: googleError,
    },
  ] = useLazySignUpWithGoogleQuery();

  const handleGoogleAuthentication = async () => {
    await signUpWIthGoogle("");
  };


  const handleSubmit = async () => {
    if (
      !validateEmail(emailRef.current!.value.trim()) ||
      passwordRef.current!.value.trim() === ""
    ) {
      setIsError(true);
      return;
    }

    if (rememberMe) {
      const value = emailRef.current!.value.trim();
      localStorage.setItem(BLIPPTO_LOCAL_STORAGE_USER_EMAIL, value);
    } else if (!rememberMe && userEmail) {
      localStorage.removeItem(BLIPPTO_LOCAL_STORAGE_USER_EMAIL);
    }

    const data = {
      email: emailRef.current!.value.trim(),
      password: passwordRef.current!.value.trim(),
    };

    if (process.env.REACT_APP_ENV === "local") {
      navigate(BLIPPTO_PAGES.userProfile);
      return;
    }
  

    await doLogin(data);
  };

  useEffect(() => {
    if (userEmail) {
      if (emailRef.current) {
        emailRef.current!.value = userEmail;
      }
      setRememberMe(true);
    }

    if (isLoginError || isGoogleQueryError) {
      let errorMessage
      console.log(loginError, googleError)
      const statusCode = (loginError as any)?.response?.status;
      if (statusCode === 404) errorMessage = "User doesn't exist"
      if (statusCode === 500) errorMessage = "Something went wrong"
       Swal.fire("error", errorMessage, "error")
       return
    }

    if (loginSuccessful || googleLoginSuccessful) {
      window.localStorage.setItem("Tkn", `${(data || googleData)?.data?.token}`);
      navigate(BLIPPTO_PAGES.userProfile);
    }
 
  }, [loginSuccessful, googleLoginSuccessful, data, googleData, navigate, userEmail, isLoginError, isGoogleQueryError]);

  return (
    <>
      {loading && <Loader />}
      <div className="flex signin-bg flex-row-reverse">
        <div className="w-full lg:w-[45%] flex flex-col items-center relative p-7 sm:p-10 h-screen">
          <p className="self-start">
            <InvertedLogo className="scale-[0.7] lg:scale-75" />
          </p>
          <div className="w-full sm:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6 signUpContainer mt-20 lg:mt-0 lg:scale-[0.8] 2xl:scale-100 2xl:mt-20">
            <div>
              <p className="font-semibold text-[2rem] 2xl:text-5xl text-center mb-2 2xl:mb-5">
                Let's get started
              </p>
              <p className="text-sm 2xl:text-lg text-center text-[#00000099]">
                Don't have an account?{" "}
                <Link to="/signup" className="text-black">
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)]"
              onClick={handleGoogleAuthentication}
            >
              <div className="flex items-center">
                <GoogleLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
                <p className="text-sm font-medium">Continue with Google</p>
              </div>
            </button>
            <button
            disabled
              className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center  shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)]"
            >
              <div className="flex items-center">
                <FacebookLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
                <p className="text-sm font-medium">Continue with Facebook</p>
              </div>
            </button>
            <div className="h-10 2xl:h-12 flex relative items-center">
              <hr className="border-black w-full h-[0.05rem]" />
              <div className="absolute h-10 2xl:h-12 w-16 z-10 bg-white flex justify-center items-center left-[50%] -translate-x-[50%]">
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
                    <VisibleIcon className="scale-[0.8] lg:scale-75" />
                  ) : (
                    <VisibilityOff className="scale-[0.7] lg:scale-75" />
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="ml-3 xl:ml-8 flex items-center max-[400px]:text-xs">
                <input
                  type="checkbox"
                  className="mr-2 min-w-[15px] max-w-[15px]"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />{" "}
                Remember me
              </p>
              <button
                className="ml-7 xl:ml-8 flex items-center font-bold border-none cursor-pointer max-[400px]:text-xs"
                onClick={() => navigate(BLIPPTO_PAGES.forgotPassword)}
              >
                Forgot password?
              </button>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-12 2xl:h-16 w-full font-semibold"
            >
              Login
            </button>
          </div>
        </div>
        <div className="blipto-signIn-right hidden lg:flex flex-col lg:w-[55%]"></div>
      </div>
    </>
  );
};

export default SignIn;
