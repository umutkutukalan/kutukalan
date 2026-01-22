import axios from "axios";
import { API_URL } from "../config";

export interface MobilAppData {
  logo: string;
  mainImg: string;
  status: string;
}

export const CreateMobilAppService = async (appData: MobilAppData) => {
  try {
    const response = await axios.post(`${API_URL}/mobil-apps`, appData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating mobile app:", error);
    throw error;
  }
};
