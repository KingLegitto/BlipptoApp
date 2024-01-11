import React, { useRef } from "react";
import { ReactComponent as ArrowRight } from "../../assets/pointRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/pointLeft.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import CarouselIndicator from "../carouselIndicator";
import Payment from "../payment/payment";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";
import { useRegisterEstate } from "../../hooks/useAuth";
import { RegisterPageProps, FormInputRefs } from "../../propTypes";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const requiredFields = [
  "cardHolderName",
  "cardNumber",
  "expirationDate",
  "cvv",
];

const initializeRefs = (fields: string[]): FormInputRefs => {
  const refs: FormInputRefs = {};
  fields.forEach((field) => {
    refs[field] = useRef<HTMLInputElement>(null);
  });
  return refs;
};

const RegisterFourthPage: React.FC<RegisterPageProps> = ({
  currentStep,
  setCurrentStep,
  children,
  formData,
  handleInputChange,
}) => {
  const { mutate: registerEstate } = useRegisterEstate();
  const inputRefs = useRef<FormInputRefs>(initializeRefs(requiredFields));
  const navigate = useNavigate();

  const handleSubmit = () => {
    const missingFields = requiredFields.filter(
      (field) => !(formData.card as any)[field]
    );

    if (missingFields.length > 0) {
      const inputRef = inputRefs.current[missingFields[0]];
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    registerEstate(formData, {
      onSuccess: () => {
        window.sessionStorage.removeItem("userType");
        navigate(`/user/profile`);
      },
      onError: (error: any) => {
        Swal.fire("error", error.response.data.message, "error");
      },
    });
  };

  return (
    <div className="flex">
      <div className="hidden w-[55%] bg-brand p-10 lg:flex flex-col justify-center relative h-screen overflow-clip">
        <p className="md:text-3xl 2xl:text-[64px] font-bold text-white md:leading-9 2xl:leading-[80px] w-[80%]">
          Swift Payment: Add Your Billing Details!
        </p>
        <p className="md:leading-4 2xl:leading-6 text-xs xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
          Fantastic! Ready to wrap it up? Simply add your billing details now
          for a speedy payment process. We've got your security covered!
        </p>
        <CarouselIndicator
          currentStep={currentStep}
          numOfSteps={[1, 2, 3, 4]}
        />
        <p className="lg:text-sm 2xl:text-xl font-medium text-white absolute bottom-10">
          <span className="relative z-10 mr-8">
            Terms
          </span>
          <span className="relative z-10">Privacy</span>
        </p>
        <ConcentricCircles className="absolute -right-5 translate-x-[50%] -translate-y-[35%] lg:scale-[0.6] xl:scale-75" />
        <ConcentricCircles className="absolute -translate-x-[50%] translate-y-[50%] lg:scale-[0.6] xl:scale-75" />
      </div>
      <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen overflow-scroll">
        <p>
          <InvertedLogo className="scale-[0.6] xl:scale-75" />
        </p>
        <div className="mt-5">{children}</div>
        <div className="w-full p-5 sm:p-7 xl:pr-10 rounded-2xl bg-background h-auto flex flex-col gap-y-7 mt-7 shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)]">
          <p className="text-lg 2xl:text-2xl font-medium">Payment Details</p>
          <Payment
            formData={formData}
            handleInputChange={handleInputChange}
            inputRefs={inputRefs}
          />
          <div className="flex justify-end">
            <button
              className="h-9 xl:h-12 w-[5.2rem] xl:w-[7.6rem] border-[#FFD601] border-2 rounded-full flex justify-center items-center mr-5"
              onClick={() => setCurrentStep((prev: number) => prev - 1)}
            >
              <ArrowLeft className="scale-[0.6] xl:scale-75" />
              <p className="text-xs 2xl:text-base font-semibold mr-2">Back</p>
            </button>
            <button
              className="h-9 xl:h-12 w-[5rem] xl:w-[7.6rem] bg-accenture rounded-full flex justify-center items-center"
              onClick={() => handleSubmit()}
            >
              <p className="text-xs 2xl:text-base font-semibold ml-2">Done</p>
              <ArrowRight className="scale-[0.6] xl:scale-75" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFourthPage;
