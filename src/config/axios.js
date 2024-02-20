import axios from "axios";

export const axiosAuth = (authToken) => {
  const url = "https://192.168.1.23:1887";

  if (authToken === null) {
    return axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.create({
      baseURL: url,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });
  }
};
