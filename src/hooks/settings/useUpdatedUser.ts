import { useState } from "react";
import { userUpdatedService } from "../../services/settings/userUpdatedService";

export const useUpdatedUser = () => {
  const [error, setError] = useState<Error | null>(null);
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
      return response;
    } catch (error) {
      setError(error as Error);
    }
  };

  return { updateUser, error };
};
