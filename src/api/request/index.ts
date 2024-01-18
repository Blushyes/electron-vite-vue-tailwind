import axios from "axios";

const instance = axios.create({
  baseURL: window.location.protocol === 'https:' ? import.meta.env.VITE_BASE_HTTPS_URL : import.meta.env.VITE_BASE_HTTP_URL
})

instance.interceptors.response.use(
  function (response) {
    const backendResponse = response.data;
    if (backendResponse.code === 200) {
      return backendResponse;
    } else {
      alert(backendResponse.message)
      return Promise.reject(backendResponse.message)
    }
  },
  function (error) {
    return Promise.reject(error);
  }
)

export default instance;
