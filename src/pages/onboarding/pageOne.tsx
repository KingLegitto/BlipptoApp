import React, { useRef } from "react";
import { ReactComponent as ArrowRight } from "../../assets/pointRight.svg";
import { ReactComponent as InvertedLogo } from "../../assets/invertedLogo.svg";
import CarouselIndicator from "../../components/carouselIndicator";
import FileInput from "../../components/fileUploader/fileUploader";
import { ReactComponent as ConcentricCircles } from "../../assets/concentricCircles.svg";
import { RegisterPageProps, FormInputRefs } from "../../propTypes";
import DropdownSelect from "../../components/dropDowns/onboardingDropDown";
import DropdownSelectWithSearch from "../../components/dropDowns/dropDownWithSearch";
import { Link } from "react-router-dom";

const requiredFields = [
  "firstName",
  "lastName",
  "gender",
  "maritalStatus",
  "occupation",
  "phoneNumber",
  "state",
  "zipCode",
  "block",
  "street",
  "profilePhoto",
];

const initializeRefs = (fields: string[]): FormInputRefs => {
  const refs: FormInputRefs = {};
  fields.forEach((field) => {
    refs[field] = useRef<HTMLInputElement>(null);
  });
  return refs;
};

const RegisterFirstPage: React.FC<RegisterPageProps> = ({
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

  const moveToNextpage = () => {
    const missingFields = requiredFields.filter(
      (field) => !(formData.personal as any)[field]
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
          Start Personalizing: Dive into A Tailored Excellence
        </p>
        <p className="md:leading-4 2xl:leading-6 text-xs xl:text-lg text-white md:w-[80%] 2xl:w-[70%] mt-7">
          Embark on a journey of personalized excellence by starting with your
          unique details. Your preferences shape the experience, ensuring it's
          tailored just for you. Dive into a world where every detail reflects
          your individuality. From customized services to curated content, the
          adventure begins with your personal touch. Get ready to experience
          excellence, crafted exclusively for you
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
        <div className="w-full p-5 sm:p-7 2xl:pr-10 rounded-2xl bg-white gap-y-6 flex flex-col shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[70%] overflow-scroll">
          <p className="text-lg 2xl:text-2xl font-medium">Personal Details</p>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="firstName"
                ref={inputRefs.current.firstName}
                value={(formData.personal && formData.personal.firstName) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                First name
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                name="lastName"
                ref={inputRefs.current.lastName}
                value={(formData.personal && formData.personal.lastName) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Last name
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <DropdownSelect
                options={["Male", "Female"]}
                name={"gender"}
                label={'Gender'}
                ref={inputRefs.current.gender}
                handleSelectChange={handleSelectChange}
                category={"personal"}
                formData={formData}
              />
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
            <DropdownSelect
                options={["Single", "Married", "Other"]}
                name={"maritalStatus"}
                label={'Marital Status'}
                ref={inputRefs.current.maritalStatus}
                handleSelectChange={handleSelectChange}
                category={"personal"}
                formData={formData}
              />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                ref={inputRefs.current.occupation}
                name="occupation"
                value={
                  (formData.personal && formData.personal.occupation) || ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Occupation
              </p>
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative flex">
              <DropdownSelectWithSearch
                options={countryList!}
                name={"country"}
                label={"Country"}
                handleSelectChange={handleSelectChange}
                category={"personal"}
                formData={formData}
                handleSelectedCountryCode={handleSelectedCountryCode!}
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
                    (formData.personal && formData.personal.phoneNumber) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
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
                    (formData.personal && formData.personal.alternatePhoneNumber) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4">
                  Alternate Number
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
              <DropdownSelect
                options={stateList!}
                name={"state"}
                label={"State"}
                ref={inputRefs.current.state}
                handleSelectChange={handleSelectChange}
                category={"personal"}
                formData={formData}
              />
            </div>
            <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="number"
                name="zipCode"
                ref={inputRefs.current.zipCode}
                value={(formData.personal && formData.personal.zipCode) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Zip code
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-9 sm:h-12 2xl:h-[3.2rem] relative">
              <input
                className="border-[1px] border-black border-r-0 rounded-l-[2rem] h-full w-[20%] sm:w-[15%] lg:w-[20%] pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                placeholder="Block"
                name="block"
                ref={inputRefs.current.block}
                value={(formData.personal && formData.personal.block) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <input
                className="border-[1px] border-black rounded-r-[2rem] h-full w-[80%] sm:w-[85%] lg:w-[80%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                type="text"
                placeholder="Street"
                name="street"
                ref={inputRefs.current.street}
                value={(formData.personal && formData.personal.street) || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "personal")
                }
              />
              <p className="font-medium text-xs 2xl:text-base absolute bg-white py-0.5 px-2 -top-2.5 2xl:-top-3.5 left-4 required">
                Address
              </p>
            </div>
          </div>
          <FileInput
            handleInputChange={handleInputChange}
            formData={formData}
            category={"personal"}
            ref={inputRefs.current.profilePhoto}
          />
          <div className="flex justify-end">
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

export default RegisterFirstPage;
