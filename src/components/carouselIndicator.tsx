import React from "react";

interface CarouselIndicatorProps {
  currentStep: number;
  numOfSteps: number[];
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  currentStep,
  numOfSteps,
}) => {
  return (
    <div className="flex w-28 my-4 justify-between">
      {numOfSteps.map((step: any, idx: number) => {
        return (
          <div
            key={step}
            className={`h-1 w-5 rounded-full ${
              idx + 1 === currentStep ? "bg-accenture" : "bg-white"
            }`}
          />
        );
      })}
    </div>
  );
};

export default CarouselIndicator;
