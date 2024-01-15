import React, { useState, useEffect, ChangeEvent, DragEvent } from "react";
import RegisterFirstPage from "./pageOne";
import RegisterSecondPage from "./pageTwo";
import RegisterThirdPage from "./pageThree";
import RegisterFourthPage from "./pageFour";
import Stepper from "../../components/stepper/stepper";
import {
  FormData,
  PersonalData,
  EstateData,
  StaffData,
  CardData,
  CountryData
} from "../../propTypes";
import { initialState } from "../../dummydata/onboardingInitialState";
import Swal from "sweetalert2";
import { getCountryListData, getStateListData } from "../../utils/helpersForOnboarding";


const Onboarding:React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [countryList, setCountryList] = useState<CountryData[]>([])
  const [countryCode, setCountryCode] = useState<string>("NG")
  const [stateList, setStateList] = useState<string[]>([])
  const stepsData = [
    { label: "Personal", value: 1 },
    { label: "Estate", value: 2 },
    { label: "Staff", value: 3 },
    { label: "Payment", value: 4 },
  ];
  const [width, setWidth] = useState(0);

  useEffect(() => {
    (async function(){
      const countryData = await getCountryListData()
      setCountryList(countryData)
    })() 
  }, [])

  useEffect(() => {
    (async function(){
      const stateData = await getStateListData(countryCode)
      const updatedStateData = stateData.map((state:any) => state.name)
      setStateList(updatedStateData.sort())
    })() 
  }, [countryCode])

  useEffect(() => {
    setWidth((100 / (stepsData.length - 1)) * (currentStep - 1));
  }, [currentStep, stepsData.length]);

  const [formData, setFormData] = useState<FormData>(initialState);

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
        if (file.size > 5000000) return Swal.fire("error", "file too large", "error")
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
    setCountryCode(ISOCode)
  }

  return (
    <div>
      {currentStep === 1 && (
        <RegisterFirstPage
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handleInputChange={handleInputChange}
          formData={formData}
          handleSelectChange={handleSelectChange}
          countryList={countryList}
          stateList={stateList}
          handleSelectedCountryCode={handleSelectedCountryCode}
        >
          <Stepper
            currentStep={currentStep}
            stepsData={stepsData}
            width={width}
          />
        </RegisterFirstPage>
      )}
      {currentStep === 2 && (
        <RegisterSecondPage
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handleInputChange={handleInputChange}
          formData={formData}
          handleSelectChange={handleSelectChange}
          countryList={countryList}
          stateList={stateList}
          handleSelectedCountryCode={handleSelectedCountryCode}
        >
          <Stepper
            currentStep={currentStep}
            stepsData={stepsData}
            width={width}
          />
        </RegisterSecondPage>
      )}
      {currentStep === 3 && (
        <RegisterThirdPage
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handleInputChange={handleInputChange}
          formData={formData}
          handleSelectChange={handleSelectChange}
          countryList={countryList}
          stateList={stateList}
          handleSelectedCountryCode={handleSelectedCountryCode}
        >
          <Stepper
            currentStep={currentStep}
            stepsData={stepsData}
            width={width}
          />
        </RegisterThirdPage>
      )}
      {currentStep === 4 && (
        <RegisterFourthPage
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handleInputChange={handleInputChange}
          formData={formData}
          handleSelectChange={handleSelectChange}
        >
          <Stepper
            currentStep={currentStep}
            stepsData={stepsData}
            width={width}
          />
        </RegisterFourthPage>
      )}
    </div>
  );
};

export default Onboarding;
