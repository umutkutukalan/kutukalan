import { createContext, useEffect, useState } from "react";
import { useAbout } from "../hooks/useAbout";
import type { AboutData } from "../services/aboutServices";

interface About extends AboutData {
  id?: string | number;
  [key: string]: unknown;
}

interface AboutContextType {
  abouts: About[];
}

interface AboutProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AboutContext = createContext<AboutContextType | undefined>(
  undefined
);

export const AboutProvider = ({ children }: AboutProviderProps) => {
  const { getAbouts } = useAbout();
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    getAbouts().then((data) => setAbouts(data));
  }, [getAbouts]);

  return (
    <AboutContext.Provider value={{ abouts }}>{children}</AboutContext.Provider>
  );
};
