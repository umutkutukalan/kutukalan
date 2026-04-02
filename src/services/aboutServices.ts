import axios from "axios";
import { API_URL } from "./config";

export interface AboutData {
  paragraph: string;
  aboutImage: string;
  orderIdx: number;
}

export const CreateAbout = async (aboutData: AboutData) => {
  try {
    const response = await axios.post(`${API_URL}/about`, aboutData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating about entry:", error);
    throw error;
  }
};

export const GetAbouts = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about entries:", error);
    throw error;
  }
};
