import React, { useRef, useState } from "react";
import { ReactComponent as FacebookLogo } from "../../assets/facebook.svg";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";
import { ReactComponent as EmailLogo } from "../../assets/sendMail.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import { ReactComponent as VisibilityOff } from "../../assets/visibilityOff.svg";
import GridPalette1 from "../../assets/images/GridPalette1.png";
import GridPalette2 from "../../assets/images/GridPalette2.png";
import VisibleIcon from "../icons/visibilityIcon";
import { Link, useLocation } from "react-router-dom";
import {
  useSignup,
  useHandleSignUpWithFacebook,
  useHandleSignUpWithGoogle,
} from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: signUp } = useSignup();
  const authenticateWithGoogle = useHandleSignUpWithGoogle();
  const authenticateWithFacebook = useHandleSignUpWithFacebook();

  const handleGoogleAuthentication = () => {};

  const handleFacebookAuthentication = () => {};

  const handleSubmit = () => {};
  return (
    <section className="blipto-signIn bg-background flex items-center justify-center md:justify-between md:items-start md:pl-[50px] max-[579px]:p-7  h-fit max-h-fit min-h-screen ">
      <p className=" z-30">
        <InvertedLogo className="absolute top-7 left-14 scale-[0.7] lg:scale-75" />
      </p>
      <div className="blipto-signIn-left w-full md:min-w-[50%] md:max-w-[50%] h-fit flex justify-center bg-background relative pt-7 max-h-fit min-h-fit overflow-scroll">
        <div className="w-[522px] flex flex-col gap-y-4 xl:gap-y-6 signUpContainer mt-32 mb-10">
          <p className="font-semibold text-[2rem] 2xl:text-5xl text-center">
            Let's get started
          </p>
          <p className="text-sm 2xl:text-lg text-center text-[#00000099]">
            Don't have an account?{" "}
            <Link to="/login" className="text-black">
              Sign Up
            </Link>
          </p>
          <div
            className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
            onClick={() => handleGoogleAuthentication()}
          >
            <div className="w-60% 2xl:w-[45%] flex items-center">
              <GoogleLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
              <p className="text-sm font-medium">Sign in with Google</p>
            </div>
          </div>
          <div
            className="h-12 2xl:h-16 rounded-[2rem] bg-white flex justify-center items-center shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)]"
            onClick={() => handleFacebookAuthentication()}
          >
            <div className="w-60% 2xl:w-[45%] flex items-center">
              <FacebookLogo className="mr-3 2xl:mr-5 scale-[0.7] lg:scale-75" />
              <p className="text-sm font-medium">Sign in with Facebook</p>
            </div>
          </div>
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
              name="price"
              id="price"
              className="block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 text-gray-900 outline-0 focus:border-yellow-300 focus:border-2 sm:text-sm sm:leading-6"
              placeholder="Email"
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
              className="block w-full rounded-[2rem] h-full bg-[#d9d9d93d] pl-16 xl:pl-20 text-gray-900 outline-0 focus:border-yellow-300 focus:border-2 sm:text-sm sm:leading-6"
              placeholder="Password"
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
            {loading ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </div>
      <figure
        className="blipto-signIn-right hidden md:flex gap-8 justify-end max-h-[900px] min-h-[900px] relative md:w-[50%]"
        // style={{ width: "calc(100% - 572px)" }}
      >
        <img
          src={GridPalette1}
          className="max-w-[350px] object-contain absolute top-0 right-[372px]"
          alt="/"
        />
        <img
          src={GridPalette2}
          className="max-w-[350px] object-contain absolute top-0"
          alt="/"
        />
      </figure>
    </section>
  );
};

export default SignIn;
