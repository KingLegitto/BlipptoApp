import React, { useRef } from "react";
import { ReactComponent as ArrowRight } from "../../assets/pointRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/pointLeft.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import CarouselIndicator from "../../components/carouselIndicator";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";
import { RegisterPageProps, FormInputRefs } from "../../propTypes";
import DropdownSelect from "../../components/dropDowns/onboardingDropDown";
import DropdownSelectWithSearch from "../../components/dropDowns/dropDownWithSearch";

const requiredFields = [
  "name",
  "email",
  "phoneNumber",
  "country",
  "state",
  "block",
  "street",
];

const initializeRefs = (fields: string[]): FormInputRefs => {
  const refs: FormInputRefs = {};
  fields.forEach((field) => {
    refs[field] = useRef<HTMLInputElement>(null);
  });
  return refs;
};

const RegisterSecondPage: React.FC<RegisterPageProps> = ({
  currentStep,
  setCurrentStep,
  children,
  formData,
  handleInputChange,
  handleSelectChange,
  countryList,
  stateList,
  handleSelectedCountryCode,
}) => {
  const inputRefs = useRef<FormInputRefs>(initializeRefs(requiredFields));

  const moveToNextpage = () => {
    const missingFields = requiredFields.filter(
      (field) => !(formData.estate as any)[field]
    );
    if (missingFields.length > 0) {
      const inputRef = inputRefs.current[missingFields[0]];
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    setCurrentStep((prev: number) => prev + 1);
  };

  return (
    <div className="flex">
      <div className="hidden w-[55%] bg-brand p-10 lg:flex flex-col justify-center relative h-screen overflow-clip">
        <p className="md:text-3xl 2xl:text-[64px] font-bold text-white md:leading-9 2xl:leading-[80px] w-[80%]">
          Secure Estate Operations: Staff Essentials
        </p>
        <p className="md:leading-4 2xl:leading-6 text-xs xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
          As part of our dedicated team, managing estate details becomes a
          breeze. We prioritize security and seamless entry, providing staff
          with all the necessary information for efficient estate management.
          Your role is vital in creating a safe and welcoming environment.
          Explore the details, streamline processes, and contribute to the
          overall excellence of our estate management. Together, we ensure a
          secure and smooth experience for everyone involved!
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
      <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen overflow-scroll">
        <p>
          <InvertedLogo className="scale-[0.6] xl:scale-75" />
        </p>
        <div className="mt-5">{children}</div>
        <div className="w-full p-5 sm:p-7 xl:pr-10 rounded-2xl bg-white min-h-[350px] sm:min-h-[450px] 2xl:min-h-[500px] flex flex-col justify-between shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)]">
          <p className="text-lg 2xl:text-2xl font-medium">Estate Details</p>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 pr-3 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="name"
                ref={inputRefs.current.name}
                value={(formData.estate && formData.estate.name) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                Estate name
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] bg-white border-black rounded-[2rem] h-full w-full pl-6 pr-3 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="email"
                name="email"
                ref={inputRefs.current.email}
                value={(formData.estate && formData.estate.email) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                Email
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="number"
                name="phoneNumber"
                ref={inputRefs.current.phoneNumber}
                value={(formData.estate && formData.estate.phoneNumber) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                Phone number
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="number"
                name="zipCode"
                value={(formData.estate && formData.estate.zipCode) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                Zip code
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <DropdownSelectWithSearch
                options={countryList!}
                name={"country"}
                handleSelectChange={handleSelectChange}
                category={"estate"}
                formData={formData}
                handleSelectedCountryCode={handleSelectedCountryCode!}
                ref={inputRefs.current.country}
              />
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <DropdownSelect
                options={stateList!}
                name={"state"}
                handleSelectChange={handleSelectChange}
                category={"estate"}
                formData={formData}
                ref={inputRefs.current.state}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black border-r-0 rounded-l-[2rem] h-full w-[20%] xl:w-[15%] pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                placeholder="Block"
                ref={inputRefs.current.block}
                name="block"
                value={(formData.estate && formData.estate.block) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <input
                className="border-[1px] border-black rounded-r-[2rem] h-full w-[80%] xl:w-[85%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                placeholder="Street"
                name="street"
                ref={inputRefs.current.street}
                value={(formData.estate && formData.estate.street) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "estate")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                Address
              </p>
            </div>
          </div>
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
              onClick={() => moveToNextpage()}
            >
              <p className="text-xs 2xl:text-base font-semibold ml-2">Next</p>
              <ArrowRight className="scale-[0.6] xl:scale-75" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSecondPage;
