import {
  createUserService,
  type RegisterUserData,
} from "../services/userServices";

export const useUsers = () => {
  const createUser = async (userData: RegisterUserData) => {
    try {
      const response = await createUserService(userData);
      console.log("User created successfully:", response);
      return response;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  return { createUser };
};
