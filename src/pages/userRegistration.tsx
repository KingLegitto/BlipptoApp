import React, {
  useState,
  ChangeEvent,
  DragEvent,
  useRef,
  useEffect,
} from "react";
import { ReactComponent as ArrowRight } from "../assets/pointRight.svg";
import { ReactComponent as InvertedLogo } from "../assets/invertedLogo.svg";
import FileInput from "../components/fileUploader/fileUploader";
import { ReactComponent as ConcentricCircles } from "../assets/concentricCircles.svg";
import DropdownSelect from "../components/dropDowns/onboardingDropDown";
import DropdownSelectWithSearch from "../components/dropDowns/dropDownWithSearch";
import Loader from "../components/Loader/Loader";
import {
  FormInputRefs,
  FormData,
  PersonalData,
  EstateData,
  StaffData,
  CardData,
  CountryData,
} from "../propTypes";
import { initialState } from "../dummydata/onboardingInitialState";
import Swal from "sweetalert2";
import { useRegisterUser } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  getCountryListData,
  getStateListData,
} from "../utils/helpersForOnboarding";
import WelcomeModal from "../components/Modals/WelcomeModal";

const requiredFields = [
  "firstName",
  "lastName",
  "gender",
  "maritalStatus",
  "occupation",
  "phoneNumber",
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

const UserRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const inputRefs = useRef<FormInputRefs>(initializeRefs(requiredFields));
  const { mutate: registerUser } = useRegisterUser();
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState<CountryData[]>([]);
  const [countryCode, setCountryCode] = useState<string>("NG");
  const [stateList, setStateList] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    (async function () {
      const countryData = await getCountryListData();
      setCountryList(countryData);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const stateData = await getStateListData(countryCode);
      const updatedStateData = stateData.map((state: any) => state.name);
      setStateList(updatedStateData.sort());
    })();
  }, [countryCode]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>,
    category: string
  ) => {
    e.preventDefault();
    const currentSection = formData[category as keyof typeof formData];
    let updatedSection: PersonalData | EstateData | StaffData | CardData;

    if ((e as DragEvent<HTMLDivElement>).dataTransfer) {
      const droppedFile = (e as DragEvent<HTMLDivElement>).dataTransfer
        .files[0];
      if (droppedFile.size > 5000000)
        return Swal.fire("error", "file too large", "error");
      updatedSection = { ...currentSection, image: droppedFile };
    } else if ((e as ChangeEvent<HTMLInputElement>).target) {
      const { name, value, files } = e.target as HTMLInputElement;
      if (files) {
        const file = files[0];
        if (file.size > 5000000)
          return Swal.fire("error", "file too large", "error");
        updatedSection = { ...currentSection, image: file };
      } else if (value !== undefined) {
        updatedSection = { ...currentSection, [name]: value };
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: updatedSection,
    }));
  };

  const handleSelectChange = (
    name: string,
    category: string,
    value: string
  ) => {
    const updatedSection = {
      ...formData[category as keyof typeof formData],
      [name]: value,
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: updatedSection,
    }));
  };

  const handleSelectedCountryCode = (ISOCode: string) => {
    setCountryCode(ISOCode);
  };

  const handleSubmit = () => {
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

    setLoading(true);

    if (process.env.REACT_APP_ENV === "local") {
      setLoading(false);
      setShowWelcome(true);
      return;
    }

    registerUser(formData, {
      onSuccess: (data) => {
        window.sessionStorage.removeItem("userType");
        setLoading(false);
        setShowWelcome(true);
      },
      onError: (error: any) => {
        setLoading(false);
        Swal.fire("error", error.message, "error");
      },
    });
  };

  const handleContinue = () => {
    setTimeout(() => {
      setShowWelcome(false);
      navigate(`/user/profile`);
    }, 900);
  };

  return (
    <>
      {loading && <Loader />}
      {showWelcome && <WelcomeModal handleButtonClick={handleContinue} />}
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
          <p className="lg:text-sm 2xl:text-xl font-medium text-white absolute bottom-10">
            <span className="relative z-10 mr-8">Terms</span>
            <span className="relative z-10">Privacy</span>
          </p>
          <ConcentricCircles className="absolute -right-5 translate-x-[50%] -translate-y-[35%] lg:scale-[0.6] xl:scale-75" />
          <ConcentricCircles className="absolute -translate-x-[50%] translate-y-[50%] lg:scale-[0.6] xl:scale-75" />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col bg-background p-6 sm:p-10 h-screen">
          <p>
            <InvertedLogo className="scale-[0.6] xl:scale-75" />
          </p>
          <div className="w-full p-5 xl:p-7 xl:pr-10 rounded-2xl bg-white gap-y-6 flex flex-col mt-12 shadow-[0px_2px_8px_0px_rgba(100,132,230,0.20)] min-h-[70%] overflow-scroll">
            <p className="text-lg xl:text-2xl font-medium">Personal Details</p>
            <div className="w-full flex">
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 text-sm focus:border-2"
                  type="text"
                  name="firstName"
                  ref={inputRefs.current.firstName}
                  value={
                    (formData.personal && formData.personal.firstName) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  First name
                </p>
              </div>
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  name="lastName"
                  ref={inputRefs.current.lastName}
                  value={
                    (formData.personal && formData.personal.lastName) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Last name
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
                <DropdownSelect
                  options={["Male", "Female"]}
                  name={"gender"}
                  handleSelectChange={handleSelectChange}
                  category={"personal"}
                  formData={formData}
                  ref={inputRefs.current.gender}
                />
              </div>
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  name="maritalStatus"
                  ref={inputRefs.current.maritalStatus}
                  value={
                    (formData.personal && formData.personal.maritalStatus) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Marital Status
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  name="occupation"
                  ref={inputRefs.current.occupation}
                  value={
                    (formData.personal && formData.personal.occupation) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Occupation
                </p>
              </div>
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="number"
                  name="phoneNumber"
                  ref={inputRefs.current.phoneNumber}
                  value={
                    (formData.personal && formData.personal.phoneNumber) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Phone number
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="number"
                  name="alternatePhoneNumber"
                  value={
                    (formData.personal &&
                      formData.personal.alternatePhoneNumber) ||
                    ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Alternate number
                </p>
              </div>
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative flex">
                <DropdownSelectWithSearch
                  options={countryList!}
                  name={"country"}
                  handleSelectChange={handleSelectChange}
                  category={"personal"}
                  formData={formData}
                  handleSelectedCountryCode={handleSelectedCountryCode!}
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] mr-4 sm:mr-8 relative">
                <DropdownSelect
                  options={stateList}
                  name={"state"}
                  handleSelectChange={handleSelectChange}
                  category={"personal"}
                  formData={formData}
                  ref={inputRefs.current.state}
                />
              </div>
              <div className="w-[50%] h-9 sm:h-12 2xl:h-[3.2rem] relative">
                <input
                  className="border-[1px] border-black rounded-[2rem] h-full w-full pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="number"
                  name="zipCode"
                  value={(formData.personal && formData.personal.zipCode) || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Zip code
                </p>
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
                  value={(formData.personal && formData.personal.block) || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <input
                  className="border-[1px] border-black rounded-r-[2rem] h-full w-[80%] xl:w-[85%] pl-3 2xl:pl-6 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm"
                  type="text"
                  placeholder="Street"
                  ref={inputRefs.current.street}
                  name="street"
                  value={(formData.personal && formData.personal.street) || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, "personal")
                  }
                />
                <p className="font-medium text-xs 2xl:text-base absolute bg-white h-4 -top-2 2xl:-top-3.5 left-4 p-1 px-2 leading-[0.5rem]">
                  Address
                </p>
              </div>
            </div>
            <FileInput
              handleInputChange={handleInputChange}
              formData={formData}
              category={"personal"}
            />
            <div className="flex justify-end">
              <button
                className="h-9 xl:h-12 w-[5rem] xl:w-[7.6rem] bg-accenture rounded-full flex justify-center items-center"
                onClick={() => handleSubmit()}
              >
                <p className="text-xs 2xl:text-base font-semibold ml-2">Done</p>
                <ArrowRight className="scale-[0.6] xl:scale-75" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegistrationPage;
