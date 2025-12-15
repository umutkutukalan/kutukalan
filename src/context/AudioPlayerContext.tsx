import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { useMusicContext } from "../hooks/useMusicContext";

// Types
export interface Music {
  id: string | number;
  title?: string;
  musicUrl?: string;
  musicImg?: string;
  createdAt?: string;
  [key: string]: unknown;
}

interface AudioPlayerContextType {
  setCurrentTrack: React.Dispatch<React.SetStateAction<Music | null>>;
  currentTrack: Music | null;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  progress: { current: number; duration: number };
  playTrack: (music: Music) => void;
  pause: () => void;
  handleSkipForward: () => void;
  handleSkipBackward: () => void;
  handleSeek: (newTime: number) => void;
  isRepeat: boolean;
  isShuffle: boolean;
  nextTrack: Music | null;
  handleRepeat: () => void;
  handleShuffle: () => void;
  setVolume: (volume: number) => void;
}

interface AudioPlayerProviderProps {
  children: ReactNode;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  }
  return context;
};

export const AudioPlayerProvider = ({ children }: AudioPlayerProviderProps) => {
  const audioRef = useRef(new Audio());
  const [currentTrack, setCurrentTrack] = useState<Music | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState({ current: 0, duration: 0 });
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [nextTrack, setNextTrack] = useState<Music | null>(null);
  const { musics } = useMusicContext();

  // Şarkı başlat
  const playTrack = useCallback(
    (music: Music) => {
      if (!currentTrack || currentTrack.musicUrl !== music.musicUrl) {
        audioRef.current.src = music.musicUrl || "";
        setCurrentTrack(music);
      }
      audioRef.current.play();
      setIsPlaying(true);
    },
    [currentTrack]
  );

  // Durdur
  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // İleri/geri sarma
  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 10,
        audioRef.current.duration
      );
    }
  };
  const handleSkipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 10,
        0
      );
    }
  };
  const handleSeek = (newTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleRepeat = () => {
    setIsRepeat((prev) => !prev);
  };
  const handleShuffle = () => {
    setIsShuffle((prev) => !prev);
  };
  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // 0.0 (mute) to 1.0 (max)
    }
  };

  // Sıradaki şarkıyı güncelle (shuffle aktifken)
  useEffect(() => {
    if (isShuffle && musics.length > 1 && currentTrack) {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * musics.length);
      } while (
        musics[nextIndex].musicUrl === currentTrack?.musicUrl &&
        musics.length > 1
      );
      setNextTrack(musics[nextIndex]);
    } else if (!isShuffle && musics.length > 1 && currentTrack) {
      const currentIndex = musics.findIndex(
        (music) => music.musicUrl === currentTrack.musicUrl
      );
      if (currentIndex !== -1 && currentIndex < musics.length - 1) {
        setNextTrack(musics[currentIndex + 1]);
      } else {
        setNextTrack(null); // sona gelince başa dönmek istersen musics[0] yazabilirsin
      }
    } else {
      setNextTrack(null);
    }
    // Sadece currentTrack değiştiğinde nextTrack çalındıktan sonra yeni nextTrack atanacak
  }, [isShuffle, musics, currentTrack]);

  // Progress güncelle
  useEffect(() => {
    const audio = audioRef.current;
    let lastUpdateTime = 0;
    
    const handleTimeUpdate = () => {
      const now = Date.now();
      // Progress'i sadece 500ms'de bir güncelle (performans için)
      if (now - lastUpdateTime < 500) return;
      lastUpdateTime = now;
      
      // Progress'i sadece değişiklik varsa güncelle
      const newProgress = {
        current: audio.currentTime,
        duration: audio.duration || 0,
      };
      
      setProgress((prevProgress) => {
        // Sadece anlamlı değişiklik varsa güncelle (0.5 saniye tolerans)
        if (Math.abs(prevProgress.current - newProgress.current) > 0.5 || 
            Math.abs(prevProgress.duration - newProgress.duration) > 0.1) {
          return newProgress;
        }
        return prevProgress;
      });
    };

    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else if (isShuffle && musics.length > 1 && currentTrack) {
        if (nextTrack) {
          playTrack(nextTrack);
          // Yeni nextTrack ata
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * musics.length);
          } while (
            musics[newIndex].musicUrl === nextTrack.musicUrl &&
            musics.length > 1
          );
          setNextTrack(musics[newIndex]);
        }
      } else if (!isShuffle && musics.length > 1 && currentTrack) {
        const currentIndex = musics.findIndex(
          (music) => music.musicUrl === currentTrack.musicUrl
        );
        if (currentIndex !== -1 && currentIndex < musics.length - 1) {
          playTrack(musics[currentIndex + 1]);
          setNextTrack(
            currentIndex + 2 < musics.length ? musics[currentIndex + 2] : null
          );
        } else {
          setIsPlaying(false);
          setProgress({ current: 0, duration: audio.duration || 0 });
        }
      } else {
        setIsPlaying(false);
        setProgress({ current: 0, duration: audio.duration || 0 });
      }
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isRepeat, isShuffle, musics, currentTrack, nextTrack, playTrack]);

  const contextValue = useMemo(() => ({
    setCurrentTrack,
    currentTrack,
    setIsPlaying,
    isPlaying,
    progress,
    playTrack,
    pause,
    handleSkipForward,
    handleSkipBackward,
    handleSeek,
    isRepeat,
    isShuffle,
    nextTrack,
    handleRepeat,
    handleShuffle,
    setVolume,
  }), [
    currentTrack,
    isPlaying,
    progress,
    playTrack,
    isRepeat,
    isShuffle,
    nextTrack,
  ]);

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
