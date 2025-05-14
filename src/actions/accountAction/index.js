import axios from "axios";
import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";

// import { showToast } from "../../utils/helpers/ShowToast";
export const SET_ACCOUNTS = "SET_ACCOUNTS";
export const SET_ACCOUNT = "SET_ACCOUNT";
export const SET_ACCOUNTS_LOADING = "SET_ACCOUNTS_LOADING";
export const SET_ACCOUNTS_ERROR = "SET_ACCOUNTS_ERROR";

export const fetchAccounts = () => {
  return async (dispatch) => {
    dispatch({ type: SET_ACCOUNTS_LOADING, status: true });

    try {
      authorizedAxios.interceptors.request.use(
        (config) => {
          const stored = localStorage.getItem("auth");
          const token = stored ? JSON.parse(stored)?.access_token : null;

          console.log("Authorization Header:", token); // Tambahkan ini

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      const response = await authorizedAxios.get("/users?limit=50&page=1");

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_ACCOUNTS,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ACCOUNTS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_ACCOUNTS_LOADING, status: false });
    }
  };
};

// export const getAccountById = async (id) => {
//   dispatch({ type: SET_ACCOUNTS_LOADING, status: true });

//   try {
//     const response = await axios.get(
//       "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
//     );

//     if (response.status === 200 || response.status === 201) {
//       dispatch({
//         type: SET_ACCOUNTS,
//         data: response.data,
//       });
//     }
//   } catch (error) {
//     console.error("error", error);
//     dispatch({
//       type: SET_ACCOUNTS_ERROR,
//       error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
//     });
//   } finally {
//     dispatch({ type: SET_ACCOUNTS_LOADING, status: false });
//   }
// };

// export const addAccount = (data) => {
//   return async (dispatch) => {
//     dispatch({ type: SET_ACCOUNTS_LOADING, status: true });

//     try {
//       const response = await showToast(
//         axios.post(
//           "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
//           data
//         ),
//         {
//           loading: "Menyimpan data...",
//           success: "Data provinsi berhasil ditambahkan!",
//           error: (err) => err?.message || "Gagal menyimpan data!",
//         }
//       );
//       if (response.status === 200 || response.status === 201) {
//         fetchAccounts();
//       }
//     } catch (error) {
//       console.error("error", error);
//       dispatch({
//         type: SET_ACCOUNTS_ERROR,
//         error: error?.message || "Terjadi kesalahan.",
//       });
//     } finally {
//       dispatch({ type: SET_ACCOUNTS_LOADING, status: false });
//     }
//   };
// };

// export const updateAccount = (id, data) => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACCOUNTS_LOADING, status: true });
//     axios
//       .put(
//         "https://www.emsifa.com/api-wilayah-indonesia/api/provinces/" +
//           id +
//           ".json",
//         data
//       )
//       .then((response) => {
//         if (response.status === 200 || response.status === 201) {
//           dispatch({
//             type: SET_ACCOUNTS,
//             data: response.data,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("error", error);
//         dispatch({
//           type: SET_ACCOUNTS_ERROR,
//           error: error.response.data,
//         });
//       })
//       .finally(() => {
//         dispatch({ type: SET_ACCOUNTS_LOADING, status: false });
//       });
//   };
// };

// export const deleteAccount = (id) => {
//   return (dispatch) => {
//     dispatch({ type: SET_ACCOUNTS_LOADING, status: true });
//     axios
//       .delete(
//         "https://www.emsifa.com/api-wilayah-indonesia/api/provinces/" +
//           id +
//           ".json"
//       )
//       .then((response) => {
//         if (response.status === 200 || response.status === 201) {
//           dispatch({
//             type: SET_ACCOUNTS,
//             data: response.data,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("error", error);
//         dispatch({
//           type: SET_ACCOUNTS_ERROR,
//           error: error.response.data,
//         });
//       })
//       .finally(() => {
//         dispatch({ type: SET_ACCOUNTS_LOADING, status: false });
//       });
//   };
// };
