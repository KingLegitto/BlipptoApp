import React, { useEffect, useState } from "react";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import CarouselIndicator from "../../components/carouselIndicator";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";

import Stepper from "../../components/stepper/stepper";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import { stepsData, stepsText } from "../../utils/helpersForOnboarding";

const ForgotPassword: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [width, setWidth] = useState(0);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne setCurrentStep={setCurrentStep} />;
      case 2:
        return <StepTwo setCurrentStep={setCurrentStep} />;
      case 3:
        return <StepThree setCurrentStep={setCurrentStep} />;
      case 4:
        return <StepFour setCurrentStep={setCurrentStep} />;
      default:
        return <div>Invalid Step</div>;
    }
  };

  useEffect(() => {
    setWidth((100 / (stepsData.length - 1)) * (currentStep - 1));
  }, [currentStep, stepsData.length]);

  return (
    <div className="flex">
      <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen">
        <p>
          <InvertedLogo className="scale-[0.6] xl:scale-75" />
        </p>
        <div className="mt-5">
          <Stepper
            currentStep={currentStep}
            stepsData={stepsData}
            width={width}
          />
        </div>
        <div className="w-full flex items-center flex-col lg:mt-6 xl:mt-12 lg:scale-[0.9] xl:scale-100">
          {renderStepComponent()}
        </div>
      </div>
      <div className="hidden w-[55%] bg-brand p-10 lg:flex flex-col justify-center relative h-screen overflow-clip">
        <ConcentricCircles className="absolute top-[-310px] left-[-290px] lg:scale-[0.5] xl:scale-[0.7]" />
        <ConcentricCircles className="absolute bottom-[-295px] right-[-230px] lg:scale-[0.5] xl:scale-[0.7]" />
        <p className=" 2xl:leading-[60px] xl:leading-[52px] md:text-[20px] 2xl:text-[25px] text-white w-[90%] font-bold">
          {stepsText[currentStep - 1].description}
          <br />
          {stepsText[currentStep - 1].description2}
        </p>
        <CarouselIndicator
          currentStep={currentStep}
          numOfSteps={[1, 2, 3, 4]}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
