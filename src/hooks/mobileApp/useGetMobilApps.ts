import { useEffect, useState } from "react";
import { GetMobilAppService } from "../../services/mobileApp/getMobilAppService";

export interface MobilApp {
  id: number;
  logo: string;
  mainImg: string;
  status: string;
}

export const useGetMobilApps = () => {
  const [mobilApps, setMobilApps] = useState<MobilApp[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getMobilApps = async () => {
    try {
      setIsLoading(true);
      const response = await GetMobilAppService();
      setMobilApps(response);
    } catch (error) {
      console.error("Mobil uygulamalar alınırken bir hata oluştu:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMobilApps();
  }, []);

  return { getMobilApps, mobilApps, isLoading };
};
