import axios from "axios";
import { API_URL } from "../config";

export interface LoginUserData {
  username: string;
  password: string;
}

export const loginService = async (userData: LoginUserData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Giriş yapılırken hata oluştu:", error);
    throw error;
  }
};
