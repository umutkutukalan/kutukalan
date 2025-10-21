import { useCallback, useState } from "react";
import {
  CreateAbout,
  GetAbouts,
  type AboutData,
} from "../services/aboutServices";

export const useAbout = () => {
  const [aboutList, setAboutList] = useState<AboutData[]>([]);

  // hakkımda içeriği oluşturma
  const createAbout = async (aboutData: AboutData) => {
    try {
      const response = await CreateAbout(aboutData);
      console.log("About entry created:", response);
    } catch (error) {
      console.error("Error creating about entry:", error);
    }
  };

  // hakkımda içeriğini getirme
  const getAbouts = useCallback(async () => {
    try {
      const response = await GetAbouts();
      setAboutList(response);
      return response;
    } catch (error) {
      console.error("Error fetching about entries:", error);
    }
  }, []);

  return {
    createAbout,
    getAbouts,
    aboutList,
  };
};
