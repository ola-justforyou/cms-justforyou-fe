import axios from "axios";
import { BASE_URL } from "../../../helpers/config.js";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGIN_LOADING = "SET_LOGIN_LOADING";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOGIN_LOADING, status: true });
    console.log(data, BASE_URL);

    try {
      const response = await showToast(
        axios.post(`${BASE_URL}/auth/login`, data),
        {
          loading: "Login...",
          success: "Berhasil Login",
          error: (err) => err?.message || "Gagal Login!",
        }
      );

      if (response.status === 200 || response.status === 201) {
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_LOGIN_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_LOGIN_LOADING, status: false });
    }
  };
};

export const logout = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOGIN_LOADING, status: true });

    try {
      const response = await showToast(
        axios.post(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
          data
        ),
        {
          loading: "Menyimpan data...",
          success: "Data provinsi berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_LOGIN_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_LOGIN_LOADING, status: false });
    }
  };
};
