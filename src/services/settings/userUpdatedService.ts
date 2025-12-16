import axios from "axios";
import { API_URL } from "../config";

export const userUpdatedService = async (
  userId: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  profileImage: string | null
) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, {
      firstName,
      lastName,
      username,
      email,
      profileImg: profileImage,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
      throw new Error(error.response?.data?.message || "Error updating user");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
