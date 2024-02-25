import React, { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/pointLeft.svg";
import { ForgotPasswordPageProps } from "../../../propTypes";

const StepTwo: React.FC<ForgotPasswordPageProps> = ({ setCurrentStep }) => {
  const [deleted, setDeleted] = useState(false);
  const [otp, setOtp] = useState("");

  const [isError, setIsError] = useState(false);
  const handleSubmit = () => {
    if (otp.length !== 6) {
      setIsError(true);
      return;
    }

    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const getInputIndexes = (target: HTMLElement) => {
    const inputs = [
      document.getElementById("input1"),
      document.getElementById("input2"),
      document.getElementById("input3"),
      document.getElementById("input4"),
      document.getElementById("input5"),
      document.getElementById("input6"),
    ];

    const inputIndex = inputs.findIndex((input) => input === target);
    const nextInputIndex = inputIndex + 1;
    const prevInputIndex = inputIndex - 1;

    return {
      inputs,
      nextInputIndex,
      prevInputIndex,
    };
  };

  const handleOtpInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    const targetInput = e.target as HTMLInputElement;
    const { inputs, nextInputIndex } = getInputIndexes(targetInput);
    const maxLength = 1;

    if (targetInput.value.length > maxLength) {
      targetInput.value = targetInput.value.slice(0, maxLength);
    }

    if (nextInputIndex < inputs.length) {
      const nextInputElement = inputs[nextInputIndex] as HTMLInputElement;
      nextInputElement.focus();
    }

    handleDeleteItem(e);

    const totalValues = inputs.reduce(
      (acc, input) => acc + (input as HTMLInputElement).value.trim(),
      ""
    );
    setOtp(totalValues);
  };

  const handleDeleteItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const targetInput = e.target as HTMLInputElement;
    const { inputs, prevInputIndex } = getInputIndexes(targetInput);
    if (deleted && targetInput.value.toString().length === 0) {
      if (prevInputIndex >= 0) {
        const prevInputElement = inputs[prevInputIndex] as HTMLInputElement;
        prevInputElement.focus();
      } else {
        const inputElements = inputs[0] as HTMLInputElement;
        inputElements.focus();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setDeleted(true);
      handleDeleteItem(e);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData.getData("text/plain").trim();
    const firstSixCharacters = pastedText.slice(0, 6);

    const targetInput = event.target as HTMLInputElement;

    if (firstSixCharacters.length > 0) {
      const { inputs } = getInputIndexes(targetInput);

      inputs.forEach((input, index) => {
        if (index < firstSixCharacters.length) {
          (input as HTMLInputElement).value = firstSixCharacters[index];
          if (index + 1 < inputs.length) {
            const inputElements = inputs[index + 1] as HTMLInputElement;
            inputElements.focus();
          }
        }
      });
    }
  };
  return (
    <div className="w-full xl:w-[70%] 2xl:w-[522px] flex flex-col gap-y-4 xl:gap-y-6  bg-white shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[65vh] p-4 sm:p-8 rounded-2xl lg:bg-background lg:shadow-none lg:min-h-auto lg:p-0 lg:rounded-none">
      <div>
        <p className="font-semibold text-lg xl:text-[26px] text-center mb-2 2xl:mb-5 xl:leading-6">
          Password Reset
        </p>
        <p className="text-base xl:text-xl text-center xl:leading-6 max-w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">
          We sent a code to <b>udechimamanda@gmail.com</b>
        </p>
      </div>
      <div className="relative w-full">
        <div className="flex w-full justify-between">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              placeholder=""
              type="number"
              id={`input${index}`}
              onInput={handleOtpInput}
              className={`${
                isError && otp.length !== 6
                  ? "border-2 border-red-500 focus:border-red-500"
                  : ""
              } w-[60px] h-[60px] pl-[23px] text-[32px] font-bold flex-shrink-0 rounded-5.23 border border-solid border-rgba-56-57-64-30 focus:outline-yellow-300 max-[768px]:w-[40px] max-[768px]:h-[40px] max-[768px]:pl-[13px] max-[320px]:w-[30px] max-[320px]:h-[30px] `}
              onKeyDown={handleKeyPress}
              onPaste={handlePaste}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-12 2xl:h-16 w-full font-semibold"
      >
        Continue
      </button>
      <p className="text-[15px] font-normal">
        Didn’t receive the email? <b>Click to resend</b>
      </p>
      <button className="flex gap-1 relative z-10 justify-center items-center rounded-full text-base bg-transparent h-12 2xl:h-16 w-full font-semibold forgot-password-transparent-btn">
        <ArrowLeft className="scale-[0.6] xl:scale-75" /> Back To Log In
      </button>
    </div>
  );
};

export default StepTwo;
