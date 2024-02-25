import React, { MouseEventHandler, useEffect, useState } from "react";
import Illustration from "../../assets/images/welcome_avatar3.png";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import { ReactComponent as DoubleChevron } from "../../assets/double-chevron-right.svg";

interface welcomeModalProps {
  handleButtonClick: Function;
}

const WelcomeModal: React.FC<welcomeModalProps> = ({ handleButtonClick }) => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => {};
  }, []);

  const handleClick = () => {
    setAnimate(!animate);
    handleButtonClick();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-60"></div>
      <div className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div
          style={{
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
          }}
          className="welcome-modal-main overflow-x-hidden py-6  min-[1470px]:max-w-[732px] min-[1470px]:min-w-[732px] min-[1470px]:max-h-[588px] min-[1470px]:min-h-[588px]  w-[50%] min-h-[588px] max-h-[588px] bg-[#f2f2df] z-[120] flex flex-col justify-center items-center opacity-100 max-[925px]:scale-[0.6] max-[925px]:min-w-[600px] max-[385px]:min-w-[450px]"
        >
          <img
            src={Illustration}
            alt="welcome-illustration"
            className={`w-[200px] h-[200px] object-contain transition-transform duration-700 translate-x-[-80px] ${
              animate ? "translate-y-[7.3%] z-20" : "translate-y-[100%] z-10"
            }`}
          />
          <div className="relative bg-brand w-[80%] h-[250px] z-20 flex flex-col items-center justify-center">
            {" "}
            <div
              className={`flex flex-col items-center justify-center gap-6 transition-transform duration-500 translate-x-[-130%] opacity-0  ${
                animate ? "translate-x-[0] opacity-100 " : ""
              } `}
            >
              <InvertedLogo
                className="w-[50px] h-[50px] welcome-modal-inverted-logo"
                style={{ fill: "white" }}
              />
              <h3 className="text-white text-4xl text-center">
                Welcome to Blippto
              </h3>
              <p className="text-white mt-[-10px]">
                Click below to get started
              </p>
              <DoubleChevron
                className="w-[80px] h-[80px] mt-[-30px] welcome-modal-double-chevron"
                style={{ stroke: "white" }}
                onClick={handleClick}
              />
            </div>
            <div
              className="absolute bottom-[-23px] left-0 right-0 h-6 bg-brand overflow-hidden rotate-180"
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            ></div>
            <div
              className="absolute top-[-23px] left-0 right-0 h-6 bg-brand overflow-hidden rotate-180"
              style={{
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
