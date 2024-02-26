import React, { useRef, useState } from "react";
import { ReactComponent as ArrowRight } from "../../assets/pointRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/pointLeft.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import FileInput from "../../components/fileUploader/fileUploader";
import CarouselIndicator from "../../components/carouselIndicator";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";
import { RegisterPageProps, FormInputRefs } from "../../propTypes";
import DropdownSelect from "../../components/dropDowns/onboardingDropDown";
import DropdownSelectWithSearch from "../../components/dropDowns/dropDownWithSearch";
import { validateEmail } from "../../utils/helpersForOnboarding";
import { Link } from "react-router-dom";

const requiredFields = [
  "firstName",
  "lastName",
  "gender",
  "maritalStatus",
  "email",
  "jobTitle",
  "state",
  "phoneNumber",
  "block",
  "street",
  "profilePhoto",
  "zipCode"
];

const initializeRefs = (fields: string[]): FormInputRefs => {
  const refs: FormInputRefs = {};
  fields.forEach((field) => {
    refs[field] = useRef<HTMLInputElement>(null);
  });
  return refs;
};

const RegisterThirdPage: React.FC<RegisterPageProps> = ({
  currentStep,
  setCurrentStep,
  children,
  handleInputChange,
  formData,
  handleSelectChange,
  countryList,
  stateList,
  handleSelectedCountryCode,
  dialCode
}) => {
  const inputRefs = useRef<FormInputRefs>(initializeRefs(requiredFields));
  const [error, setError] = useState<Boolean>(false);

  const moveToNextpage = () => {
    const missingFields = requiredFields.filter(
      (field) => !(formData.staff as any)[field]
    );
    if (missingFields.length > 0) {
      const inputRef = inputRefs.current[missingFields[0]];
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    if (!validateEmail(formData.staff.email)) {
      setError(true);
      return;
    }
    setCurrentStep((prev: number) => prev + 1);
  };

  return (
    <div className="flex">
      <div className="hidden w-[55%] bg-brand p-10 lg:flex flex-col justify-center relative h-screen overflow-clip">
        <p className="md:text-3xl 2xl:text-[64px] font-bold text-white md:leading-9 2xl:leading-[80px] w-[80%]">
          Get Acquainted With The Team
        </p>
        <p className="md:leading-4 2xl:leading-6 text-xs xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
          Meet Our Team: Get to know the fantastic individuals driving our
          success. We're excited to have you join our journey and discover the
          unique talents that makes our team special.
        </p>
        <CarouselIndicator
          currentStep={currentStep}
          numOfSteps={[1, 2, 3, 4]}
        />
        <p className="lg:text-sm 2xl:text-xl font-medium text-white absolute bottom-10">
        <Link to={"/"} className="relative z-10 mr-8">
            Terms
          </Link>
          <Link to={"/"} className="relative z-10">
            Privacy
          </Link>
        </p>
        <ConcentricCircles className="absolute -right-[320px] -top-[230px] xl:-top-[200px] lg:scale-[0.5] xl:scale-[0.7]" />
        <ConcentricCircles className="absolute -bottom-[300px] -left-[300px] xl:-left[260px] lg:scale-[0.5] xl:scale-[0.7]" />
      </div>
      <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen">
        <p>
          <InvertedLogo className="scale-[0.6] xl:scale-75" />
        </p>
        <div className="mt-5">{children}</div>
        <div className="w-full p-5 sm:p-7 xl:pr-10 rounded-2xl bg-white gap-y-6 flex flex-col justify-between shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[70%] overflow-scroll">
          <p className="text-lg 2xl:text-2xl font-medium">Staff Details</p>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className="border-[1px] border-black bg-white rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="firstName"
                ref={inputRefs.current.firstName}
                defaultValue={
                  (formData.staff && formData.staff.firstName) || ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                First name
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black bg-white rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="lastName"
                ref={inputRefs.current.lastName}
                defaultValue={(formData.staff && formData.staff.lastName) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Last Name
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative rounded-[2rem]">
              <DropdownSelect
                options={["Male", "Female"]}
                name={"gender"}
                label={"Gender"}
                handleSelectChange={handleSelectChange}
                category={"staff"}
                formData={formData}
                ref={inputRefs.current.gender}
              />
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
            <DropdownSelect
                options={["Single", "Married", "Other"]}
                name={"maritalStatus"}
                label={'Marital Status'}
                ref={inputRefs.current.gender}
                handleSelectChange={handleSelectChange}
                category={"staff"}
                formData={formData}
              />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className={`bg-white rounded-[2rem] h-full w-full pl-6 pr-3 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm ${
                  error
                    ? "border-red-500 border-2"
                    : "border-black border-[1px]"
                }`}
                type="email"
                name="email"
                ref={inputRefs.current.email}
                value={(formData.staff && formData.staff.email) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  error ? setError(false) : handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Email
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="appearance-none bg-white border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="jobTitle"
                ref={inputRefs.current.jobTitle}
                value={(formData.staff && formData.staff.jobTitle) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Job title
              </p>
            </div>
          </div>
          <div className="w-full flex">
          <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative flex mr-4 sm:mr-8">
              <DropdownSelectWithSearch
                options={countryList!}
                name={"country"}
                label={"Country"}
                handleSelectChange={handleSelectChange}
                category={"staff"}
                formData={formData}
                handleSelectedCountryCode={handleSelectedCountryCode!}
                ref={inputRefs.current.country}
              />
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <DropdownSelect
                options={stateList!}
                name={"state"}
                label={"State"}
                handleSelectChange={handleSelectChange}
                category={"staff"}
                formData={formData}
                ref={inputRefs.current.state}
              />
            </div>
          </div>
          <div className="w-full flex">
          <div className="w-[50%] mr-4 sm:mr-8">
              <div className="w-full h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black border-r-0 rounded-l-[2rem] h-full w-[37%] xl:w-[30%] pl-4 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  value={dialCode}
                  readOnly
                />
                <input
                  className="border-[1px] border-black rounded-r-[2rem] h-full w-[63%] xl:w-[70%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="number"
                  ref={inputRefs.current.phoneNumber}
                  name="phoneNumber"
                  value={
                    (formData.staff && formData.staff.phoneNumber) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "staff")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                  Phone Number
                </p>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="w-full h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black border-r-0 rounded-l-[2rem] h-full w-[37%] xl:w-[30%] pl-4 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  value={dialCode}
                  readOnly
                />
                <input
                  className="border-[1px] border-black rounded-r-[2rem] h-full w-[63%] xl:w-[70%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="number"
                  name="alternatePhoneNumber"
                  value={
                    (formData.staff && formData.staff.alternatePhoneNumber) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "staff")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                  Alternate Number
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black border-r-0 rounded-l-[2rem] h-full w-[20%] xl:w-[15%] pl-6 outline-none focus:border-yellow-300 focus:border-2 text-sm"
                type="text"
                placeholder="Block"
                name="block"
                ref={inputRefs.current.block}
                value={(formData.staff && formData.staff.block) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <input
                className="border-[1px] border-black rounded-r-[2rem] h-full w-[80%] xl:w-[85%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-sm"
                type="text"
                placeholder="Street"
                name="street"
                ref={inputRefs.current.street}
                value={(formData.staff && formData.staff.street) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Address
              </p>
            </div>
          </div>
          <div className="w-full flex h-auto relative">
            <FileInput
              handleInputChange={handleInputChange}
              formData={formData}
              category={"staff"}
              ref={inputRefs.current.profilePhoto}
            />
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative ml-8">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-sm"
                type="number"
                name="zipCode"
                ref={inputRefs.current.zipCode}
                value={(formData.staff && formData.staff.zipCode) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "staff")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Zip Code
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

export default RegisterThirdPage;
