import React,{ChangeEvent, DragEvent, ForwardedRef} from "react"

export interface PersonalData {
    firstName: string;
    lastName: string;
    gender: string;
    maritalStatus: string;
    occupation: string;
    phoneNumber: string;
    alternatePhoneNumber: string;
    country: string;
    state: string;
    zipCode: string;
    block: string;
    street: string;
    image: File | null;
  }
  
  export interface EstateData {
    name: string;
    email: string;
    phoneNumber: string;
    state: string;
    zipCode: string;
    block: string;
    street: string;
    country: string
    type: string
  }
  
 export interface StaffData {
    firstName: string;
    lastName: string;
    gender: string;
    maritalStatus: string;
    jobTitle: string;
    phoneNumber: string;
    alternatePhoneNumber: string;
    country: string;
    state: string;
    zipCode: string;
    block: string;
    street: string;
    image: File | null;
    email: string;
  }
  
  export interface CardData {
    cardHolderName: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  }
  
  export interface FormData {
    personal: PersonalData;
    estate: EstateData;
    staff: StaffData;
    card: CardData;
  };

  export interface CountryData {
    id: string,
    name: string,
    iso2: string
  }
  

export interface RegisterPageProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  children: React.ReactNode;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>,
    category: string
  ) => void;
  formData: FormData;
  handleSelectChange: (
    name: string,
    category: string,
    value: string
  ) => void;
  countryList?: CountryData[];
  stateList?: string[];
  handleSelectedCountryCode?: (countryCode: string) => void
}

export interface FileInputProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
    category: string
  ) => void;
  formData: FormData;
  category: string;
}

export interface DropdownProps {
  options: string[];
  name:  keyof PersonalData | keyof EstateData | keyof StaffData | keyof CardData;
  category: keyof FormData
  handleSelectChange: (
    name: string,
    category: string,
    value: string
  ) => void
  formData: FormData,
  ref?: ForwardedRef<HTMLDivElement>
}

export interface DropdownWithSearchProps {
  options: CountryData[];
  name:  keyof PersonalData | keyof EstateData | keyof StaffData | keyof CardData;
  category: keyof FormData
  handleSelectChange: (
    name: string,
    category: string,
    value: string
  ) => void
  formData: FormData,
  ref?: ForwardedRef<HTMLDivElement>;
  handleSelectedCountryCode: (countryCode: string) => void
}

export interface FormInputRefs {
  [key: string]: React.RefObject<HTMLInputElement>;
}

export interface UserData  {
  email: string;
  password: string;
};


