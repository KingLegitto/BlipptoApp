import React from "react";

type StepData = {
  label: string;
  value: number;
};
interface StepperProps {
  currentStep: number;
  stepsData: StepData[];
  width: number;
}

const Stepper: React.FC<StepperProps> = ({
  currentStep,
  stepsData,
  width,
}) => {
  return (
    <div className="progressContainer">
      <div className="progress" style={{ width: width + "%" }}></div>
      {stepsData.map((el, idx) => {
        return (
          <div key={el.label} className="h-8 sm:h-10 w-8 sm:w-10 flex justify-center items-center rounded-full z-10 bg-background">
            <div
              className={`rounded-full transition duration-500 ease-in-out z-10 border-2 border-gray-300 h-4 sm:h-6 w-4 sm:w-6 flex justify-center items-center bg-background progress-step ${
                currentStep === idx + 1 && "active"
              } ${currentStep > idx + 1 && "completed"}`}
              data-title={`${el.label}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
