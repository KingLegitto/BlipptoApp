import React, { useState, ForwardRefRenderFunction, ForwardedRef, forwardRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreditCardIcon from "../icons/creditCard";
import { ReactComponent as PayPalIcon } from "../../assets/paypal.svg";
import { ReactComponent as ApplePayIcon } from "../../assets/applePay.svg";
import CreditCardPaymentDetails from "./creditCardPaymentDetails";
import { FormData, FormInputRefs } from "../../propTypes";

interface PaymentDetailsProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => void;
  formData: FormData;
  inputRefs: React.RefObject<FormInputRefs>;
}

const Payment: ForwardRefRenderFunction<HTMLDivElement,PaymentDetailsProps> = ({
  handleInputChange,
  formData,
  inputRefs
}, ref: ForwardedRef<HTMLDivElement>) => {
  const [currentTab, setCurrentTab] = useState(1);
  const tabs = [
    {
      label: "Credit Card",
      icon: CreditCardIcon,
    },
    {
      label: "Apple Pay",
      icon: ApplePayIcon,
    },
    {
      label: "Paypal",
      icon: PayPalIcon,
    },
    {
      label: "Others",
      icon: AddIcon,
    },
  ];
  return (
    <div className="flex items-center">
      <div className="w-full">
        <div className="w-full">
          <div className="relative w-full mx-auto gap-4 grid grid-cols-3 xl:grid-cols-4 items-center">
            {tabs.map((tab, idx) => {
              return (
                <button
                key={idx}
                  onClick={() => setCurrentTab(idx + 1)}
                  className={`rounded-2xl ${
                    idx + 1 === currentTab
                      ? "shadow-none"
                      : "shadow-[0px_2.05px_8.216px_0px_rgba(100,132,230,0.20)]"
                  } flex justify-center items-center ${
                    idx + 1 === currentTab
                      ? "border-2 border-[#6484E6]"
                      : "border-0"
                  } ${
                    idx + 1 === currentTab ? "bg-background" : "bg-white"
                  } transition duration-500 ease-in-out`}
                >
                  <div className="flex flex-col items-center w-16 xl:w-20 h-14 xl:h-20 justify-between my-[20%]">
                    <tab.icon
                      className={`scale-[0.7] xl:scale-75 ${
                        idx + 1 === currentTab
                          ? "fill-none stroke-2 stroke-[#6484E6]"
                          : "text-black"
                      }`}
                    />
                    <p
                      className={`${
                        idx + 1 === currentTab ? "text-[#6484E6]" : "text-black"
                      } font-semibold text-xs xl:text-base`}
                    >
                      {tab.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-6 relative bg-background">
            {currentTab === 1 && (
              <CreditCardPaymentDetails
                formData={formData}
                handleInputChange={handleInputChange}
                ref={ref}
                inputRefs={inputRefs}
              />
            )}
            {/* {currentTab === 2 && (
              <CreditCardPaymentDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentTab === 3 && (
              <CreditCardPaymentDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentTab === 4 && (
              <CreditCardPaymentDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Payment);
