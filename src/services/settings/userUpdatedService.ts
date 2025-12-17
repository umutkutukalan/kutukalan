import axios from "axios";
import { API_URL } from "../config";

export const userUpdatedService = async (
  userId: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  profileImage: string | null,
  job?: string,
  phone?: string,
  city?: string,
  aboutMe?: string,
  aboutMeItems?: string[],
  linkedin?: string,
  github?: string,
  instagram?: string,
) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, {
      firstName,
      lastName,
      username,
      email,
      profileImg: profileImage,
      job,
      phone,
      city,
      aboutMe,
      aboutMeItems,
      linkedin,
      github,
      instagram,
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
