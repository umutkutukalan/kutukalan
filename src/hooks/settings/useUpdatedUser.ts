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
    profileImage: string | null
  ) => {
    try {
      const response = await userUpdatedService(
        userId,
        firstName,
        lastName,
        username,
        email,
        profileImage
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
