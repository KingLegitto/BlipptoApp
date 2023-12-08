import axios from "axios";

export const axiosAuth = (authToken) => {
  const url = process.env.REACT_APP_BACKEND_BASE_URL

  if (authToken === null) {
    return axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json"
      }
    })
  } else {
    return axios.create({
      baseURL: url,
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json"
      }
    })
  }
}
