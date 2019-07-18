import axios from "axios";

import qs from "qs";

const http = axios.create({
  baseURL: "http://localhost:5000/",
  paramsSerializer: params => {
    return qs.stringify(params, {
      encode: false
    });
  },
  timeout: 30000
});
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message &&
      error.response.data.error.details
    ) {
      alert({
        content: error.response.data.error.details,
        title: error.response.data.error.message
      });
    } else if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message
    ) {
      alert({
        content: error.response.data.error.message,
        title: "LoginFailed"
      });
    } else if (!error.response) {
      alert({ content: "UnknownError" });
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
