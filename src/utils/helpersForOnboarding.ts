export const BLIPPTO_LOCAL_STORAGE_USER_EMAIL = "blipptoUserEmail"

export const validateEmail = (emailAddress: string) => {
  const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
  return emailPattern.test(emailAddress);
};

export const getCountryListData = async () => {
  const apiKey: string =
    process.env.REACT_APP_API_KEY ||
    "M2FKTWQ0aUZkajhKQTE0bFhReE9mOVNyZDByMzRVelExN2xJRjlUdQ==";

  const response = await fetch("https://api.countrystatecity.in/v1/countries", {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY": apiKey,
    },
  });

  const result = await response.json()
  return result
};

export const getStateListData = async (ISOCode: string) => {
  const apiKey: string =
    process.env.REACT_APP_API_KEY ||
    "M2FKTWQ0aUZkajhKQTE0bFhReE9mOVNyZDByMzRVelExN2xJRjlUdQ==";

  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${ISOCode}/states`, {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY": apiKey,
    },
  });

  const result = await response.json()
  return result
};

export const getCountryDialingCode = async (ISOCode: string) => {
  const apiKey: string =
    process.env.REACT_APP_API_KEY ||
    "M2FKTWQ0aUZkajhKQTE0bFhReE9mOVNyZDByMzRVelExN2xJRjlUdQ==";

  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${ISOCode}`, {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY": apiKey,
    },
  });

  const result = await response.json()
  return result
};

export function replaceSpacesWithUnderscore(inputString: string) {
  if (inputString.includes(' ')) {
    return inputString.replace(/\s+/g, '_');
  }
  return inputString;
}



 export const stepsText = [
    {
      description:
        "Make sure to check your email inbox for the verification code.",
      description2: "Once received, proceed to the next step.",
    },
    {
      description:
        "You're almost there! We've sent a verification code to your email address. Check your inbox for an     email from us. Copy the code and paste in the boxes provided.",
    },
    {
      description:
        "It's time to secure your account! Please enter a new password. Make sure it's something strong and memorable. ",
    },
    {
      description:
        "Congratulations!  Your password has been successfully reset. You're all set to access your account using your new password.",
    },
  ];


   export const stepsData = [
    { label: "Step1", value: 1 },
    { label: "Step2", value: 2 },
    { label: "Step3", value: 3 },
    { label: "Step4", value: 4 },
  ];