import { createContext, useEffect, useState } from "react";
import { useAbout } from "../hooks/useAbout";
import type { AboutData } from "../services/aboutServices";

interface About extends AboutData {
  id?: string | number;
  [key: string]: unknown;
}

interface AboutContextType {
  abouts: About[];
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAbouts().then((data) => {
      setAbouts(data);
      setIsLoading(false);
    });
  }, [getAbouts]);

  return (
    <AboutContext.Provider value={{ abouts, isLoading }}>{children}</AboutContext.Provider>
  );
};
