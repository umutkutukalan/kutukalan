import {
  createContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { getAllMusicsService } from "../services/musicServices";

// Types
interface Music {
  id: number;
  title?: string;
  musicUrl?: string;
  musicImg?: string; // Base64 string veya URL
  producer?: string;
  album?: string;
  featuredArtists?: string[];
  releaseDate?: string;
  createdAt?: string;
  [key: string]: unknown;
}

interface MusicContextType {
  musics: Music[];
  totalMusics: number;
  setMusics: React.Dispatch<React.SetStateAction<Music[]>>;
  fetchMusics: (page?: number, isLoadMore?: boolean) => Promise<void>;
  loading: boolean;
  isLoadingMore: boolean;
  hasMore: boolean;
  loadMoreMusics: () => void;
  currentPage: number;
  totalPages: number;
  error: Error | null;
}

interface MusicProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const MusicContext = createContext<MusicContextType | undefined>(
  undefined,
);

export const MusicProvider = ({ children }: MusicProviderProps) => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [totalMusics, setTotalMusics] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const fetchMusics = useCallback(async (page = 0, isLoadMore = false) => {
    if (isLoadMore) {
      setIsLoadingMore(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const response = await getAllMusicsService(page, 10); // Sayfa başına 6 müzik çek

      setTotalMusics(response.data.totalMusics);

      if (isLoadMore) {
        setMusics((prev) => [...prev, ...response.data.musics]);
      } else {
        setMusics(response.data.musics);
      }

      // Spring Boot pagination bilgilerini kullan
      if (response.data.totalPages !== undefined) {
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.number || page);
        setHasMore(response.data.number + 1 < response.data.totalPages);
      } else {
        // Fallback
        const contentLength = response.data.musics
          ? response.data.musics.length
          : response.data.length;
        setHasMore(contentLength > 0);
        setCurrentPage(page);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  }, []);

  const loadMoreMusics = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      fetchMusics(currentPage + 1, true);
    }
  }, [currentPage, hasMore, isLoadingMore, fetchMusics]);

  useEffect(() => {
    // İlk yükleme için fetchMusics'i sadece bir kere çağır
    fetchMusics(0, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Boş dependency array - sadece mount'ta çalışır

  return (
    <MusicContext.Provider
      value={{
        musics,
        totalMusics,
        setMusics,
        fetchMusics,
        loading,
        isLoadingMore,
        hasMore,
        loadMoreMusics,
        currentPage,
        totalPages,
        error,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
