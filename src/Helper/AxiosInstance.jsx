
// import axios from "axios";
// import gettokenaccess from "./gettokenaccess";

// const BASE_URL = "https://test-backend.budgetlab.io" 

//  const axiosApi = axios.create({
//       baseURL: BASE_URL,
//     });

//     export const axiosWithHeaders = axios.create({
//           baseURL: BASE_URL,
//         });
        

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     const token = gettokenaccess();
//     if (token )
//     {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// },
// function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });