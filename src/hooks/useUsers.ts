import { useState } from "react";
import {
  createUserService,
  getUserByIdService,
  type RegisterUserData,
  type User,
} from "../services/userServices";

export const useUsers = () => {
  const [getLoading, setGetLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [userResponse, setUserResponse] = useState<User | null>(null);

  const createUser = async (userData: RegisterUserData) => {
    try {
      setCreateLoading(true);
      const response = await createUserService(userData);
      return response;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setCreateLoading(false);
    }
  };

  const getUserById = async (userId: number) => {
    try {
      setGetLoading(true);
      const response = await getUserByIdService(userId);
      setUserResponse(response);
      return response;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    } finally {
      setGetLoading(false);
    }
  };

  return { createUser, getUserById, userResponse, createLoading, getLoading };
};
