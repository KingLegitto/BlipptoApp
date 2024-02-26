import React, { useState, forwardRef, ForwardedRef } from "react";
import {
  DropdownProps,
  StaffData,
  EstateData,
  PersonalData,
  CardData,
} from "../../propTypes";

const DropdownSelect: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = (
  { options, name, category, handleSelectChange, formData, label },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-9 sm:h-12 2xl:h-[3.2rem]">
      <div
        className="relative flex w-full rounded-full bg-white border-[1px] border-black items-center h-full pl-6"
        ref={ref}
        tabIndex={0}
        onFocus={() => {
          if (ref && "current" in ref && ref.current) {
            ref.current.classList.add(
              "focus:border-yellow-300",
              "focus:border-2"
            );
          }
        }}
      >
        <div className="text-xs sm:text-sm">
          {(
            formData[category as keyof typeof formData] as {
              [key in
                | keyof PersonalData
                | keyof EstateData
                | keyof StaffData
                | keyof CardData]: string;
            }
          )[name] || "select"}
        </div>
        <div className="absolute right-0 pr-3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-gray-600"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            )}
          </button>
        </div>
        <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
          {label}
        </p>
      </div>
      {isOpen && (
        <div className="w-full absolute top-10 xl:top-14 2xl:top-[3.3rem] z-10 rounded-md bg-white shadow-lg max-h-60 overflow-scroll">
          <div>
            {options.map((option, idx) => {
              return (
                <div
                  key={idx}
                  className="block rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-500 no-underline hover:bg-[#FFD601]"
                  onClick={() => {
                    handleSelectChange(name, category, option);
                    setIsOpen(!isOpen);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(DropdownSelect);
