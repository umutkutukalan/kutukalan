import { useState } from "react";
import { userUpdatedService } from "../../services/settings/userUpdatedService";

export const useUpdatedUser = () => {
  const [error, setError] = useState<Error | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const updateUser = async (
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
      const response = await userUpdatedService(
        userId,
        firstName,
        lastName,
        username,
        email,
        profileImage,
        job,
        phone,
        city,
        aboutMe,
        aboutMeItems,
        linkedin,
        github,
        instagram
      );
      setUpdateLoading(true);
      console.log("User updated successfully:", response);
      return response;
    } catch (error) {
      setError(error as Error);
    } finally {
      setUpdateLoading(false);
    }
  };

  return { updateUser, error, updateLoading };
};
