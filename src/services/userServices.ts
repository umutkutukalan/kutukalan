import axios from "axios";
import { API_URL } from "./config";

export interface UserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profileImg: string;
}

export const createUserService = async (userData: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.log("Error creating user:", error);
    throw error;
  }
};
