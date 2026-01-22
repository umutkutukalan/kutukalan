import { useState } from "react";
import {
  CreateMobilAppService,
  type MobilAppData,
} from "../../services/mobileApp/createMobilAppService";

export const useCreateMobilApp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const createMobileApp = async (appData: MobilAppData) => {
    try {
      setLoading(true);
      const response = await CreateMobilAppService(appData);
      console.log("Mobile app created successfully", response);
    } catch (error) {
      console.error("Error creating mobile app:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { createMobileApp, loading };
};
