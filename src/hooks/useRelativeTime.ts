import { useMemo } from "react";
import { useFormatDate } from "./useFormatDate";


interface RelativeTime {
  formatRelativeTime: (dateString: string) => string;
}

export const useRelativeTime = (): RelativeTime => {
  const { formatDate } = useFormatDate();
  const getRelativeTime = useMemo(() => {
    return (dateString: string) => {
      if (!dateString) return "Bilinmiyor";

      const now = new Date();
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Geçersiz tarih";

      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      if (diffInSeconds < 0) return "Az önce";
      if (diffInSeconds < 60) return "Az önce";
      if (diffInMinutes < 60) return `${diffInMinutes} dakika önce`;
      if (diffInHours < 24) return `${diffInHours} saat önce`;
      if (diffInDays < 7) return `${diffInDays} gün önce`;

      // 7 günden eski ise normal tarih göster
      return formatDate(dateString);
    };
  }, [formatDate]);

  const formatRelativeTime = (dateString: string) => {
    return getRelativeTime(dateString);
  };

  return { formatRelativeTime };
};
