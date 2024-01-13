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

export function replaceSpacesWithUnderscore(inputString: string) {
  if (inputString.includes(' ')) {
    return inputString.replace(/\s+/g, '_');
  }
  return inputString;
}
