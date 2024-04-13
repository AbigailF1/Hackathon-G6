import axios from "axios";

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// Function to refresh the token
// async function refreshToken() {
//   const refreshToken = localStorage.getItem("refreshToken");
//   const response = await api.post("token/refresh/", { refresh: refreshToken });
//   localStorage.setItem("accessToken", response.data.access);
//   return response.data.access;
// }

// Axios interceptor to handle token refresh
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshToken();
//       originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//       return api(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// Usage example: making an authenticated API call
async function fetchProtectedData() {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("protected-endpoint/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export default api;