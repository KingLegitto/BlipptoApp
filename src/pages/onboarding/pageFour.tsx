import React, { useRef, useState } from "react";
import { ReactComponent as ArrowRight } from "../../assets/pointRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/pointLeft.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import CarouselIndicator from "../../components/carouselIndicator";
import Payment from "../../components/payment/payment";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";
import { useRegisterEstate } from "../../hooks/useAuth";
import { RegisterPageProps, FormInputRefs } from "../../propTypes";
import { useNavigate } from "react-router-dom";
import WelcomeModal from "../../components/Modals/WelcomeModal";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

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
  const [showWelcome, setShowWelcome] = useState<Boolean>(false);
  const { mutate: registerEstate } = useRegisterEstate();
  const inputRefs = useRef<FormInputRefs>(initializeRefs(requiredFields));
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(false);

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

    setLoading(true);

    if (process.env.REACT_APP_ENV === "local") {
      setLoading(false);
      setShowWelcome(true);
      return;
    }

    registerEstate(formData, {
      onSuccess: () => {
        window.sessionStorage.removeItem("userType");
        setLoading(false);
        setShowWelcome(true);
      },
      onError: (error: any) => {
        setLoading(false);
        Swal.fire("error", error.message, "error");
      },
    });
  };

  const handleContinue = () => {
    setTimeout(() => {
      setShowWelcome(false);
      navigate(`/user/profile`);
    }, 900);
  };

  return (
    <>
      {loading && <Loader />}
      {showWelcome && <WelcomeModal handleButtonClick={handleContinue} />}
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
            <span className="relative z-10 mr-8">Terms</span>
            <span className="relative z-10">Privacy</span>
          </p>
          <ConcentricCircles className="absolute -right-5 translate-x-[50%] -translate-y-[35%] lg:scale-[0.6] xl:scale-75" />
          <ConcentricCircles className="absolute -translate-x-[50%] translate-y-[50%] lg:scale-[0.6] xl:scale-75" />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen">
          <p>
            <InvertedLogo className="scale-[0.6] xl:scale-75" />
          </p>
          <div className="mt-5">{children}</div>
          <div className="w-full p-5 sm:p-7 xl:pr-10 rounded-2xl bg-background flex flex-col gap-y-6 mt-7 shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[65%] overflow-scroll">
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
    </>
  );
};

export default RegisterFourthPage;
