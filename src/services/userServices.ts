import axios from "axios";
import { API_URL } from "./config";

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profileImg: string;
  job?: string;
  phone?: string;
  city?: string;
  aboutMe?: string;
  aboutMeItems?: string[];
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export const createUserService = async (userData: RegisterUserData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("Error creating user:", error);
    throw error;
  }
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileImg: string;
  job?: string;
  phone?: string;
  city?: string;
  aboutMe?: string;
  aboutMeItems?: string[];
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export const getUserByIdService = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching user by ID:", error);
    throw error;
  }
};
