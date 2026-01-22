import axios from "axios";
import { API_URL } from "../config";

export const GetMobilAppService = async () => {
  const response = await axios.get(`${API_URL}/mobil-apps`);

  if (response.status !== 200) {
    throw new Error("Mobil uygulamalar alınırken bir hata oluştu.");
  }

  return response.data;
};
