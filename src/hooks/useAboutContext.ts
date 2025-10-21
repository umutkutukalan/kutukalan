import { useContext } from "react";
import { AboutContext } from "../context/AboutContext";

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error("useAboutContext must be used within an AboutProvider");
  }
  return context;
};
